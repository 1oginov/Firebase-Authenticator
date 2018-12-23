#include <Arduino.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DNSServer.h>
#include <WiFiManager.h>

#define FA_ID "ec825010-06f8-11e9-b21e-c56254554cee"
#define FA_REDIRECT_PATH "%2Fauth%3Frefresh-token%3D%25refreshToken%25"
#define FA_REDIRECT_REFRESH_TOKEN_PLACEHOLDER "%25refreshToken%25"
#define FA_TITLE "IoT-Firebase-Authentication"
#define FA_URL "https://loginov-rocks.github.io/Firebase-Authenticator/"

#define FIREBASE_API_KEY "AIzaSyBxfVaUJqHWxcTzj3rFtbMfg9LVuGKQyKU"
#define FIREBASE_AUTH_DOMAIN "iot-firebase-authentication.firebaseapp.com"
#define FIREBASE_DATABASE_URL "https%3A%2F%2Fiot-firebase-authentication.firebaseio.com"
#define FIREBASE_MESSAGING_SENDER_ID "268298190354"
#define FIREBASE_PROJECT_ID "iot-firebase-authentication"
#define FIREBASE_STORAGE_BUCKET "iot-firebase-authentication.appspot.com"

#define TOKEN_HOST "securetoken.googleapis.com"
#define TOKEN_URL "/v1/token?key="

const String FA_SIGN_IN_OPTIONS[] = {"email", "github", "google"};
const int FA_SIGN_IN_OPTIONS_LENGTH = 3;

ESP8266WebServer webServer(80);
WiFiClientSecure client;

String refreshToken = "";
String authToken = "";

String ip2string(IPAddress ip)
{
  String res = "";
  for (int i = 0; i < 3; i++)
  {
    res += String((ip >> (8 * i)) & 0xFF) + ".";
  }
  res += String(((ip >> 8 * 3)) & 0xFF);
  return res;
}

String buildFirebaseAuthenticatorUrl()
{
  IPAddress myIp = WiFi.localIP();
  String redirectUrl = "http%3A%2F%2F" + ip2string(myIp) + FA_REDIRECT_PATH;
  String signInOptions = "%5B";

  for (int i = 0; i < FA_SIGN_IN_OPTIONS_LENGTH; i++)
  {
    signInOptions += "%22" + FA_SIGN_IN_OPTIONS[i] + "%22";

    if (i != FA_SIGN_IN_OPTIONS_LENGTH - 1)
    {
      signInOptions += "%2C";
    }
  }

  signInOptions += "%5D";

  return String(FA_URL) + "?firebase-app=%7B%22config%22%3A%7B%22apiKey%22%3A%22" +
         FIREBASE_API_KEY + "%22%2C%22authDomain%22%3A%22" + FIREBASE_AUTH_DOMAIN +
         "%22%2C%22databaseURL%22%3A%22" + FIREBASE_DATABASE_URL +
         "%22%2C%22messagingSenderId%22%3A%22" + FIREBASE_MESSAGING_SENDER_ID +
         "%22%2C%22projectId%22%3A%22" + FIREBASE_PROJECT_ID +
         "%22%2C%22storageBucket%22%3A%22" + FIREBASE_STORAGE_BUCKET +
         "%22%7D%2C%22id%22%3A%22" + FA_ID +
         "%22%2C%22redirect%22%3A%7B%22refreshTokenPlaceholder%22%3A%22" + FA_REDIRECT_REFRESH_TOKEN_PLACEHOLDER +
         "%22%2C%22url%22%3A%22" + redirectUrl +
         "%22%7D%2C%22signInOptions%22%3A" + signInOptions +
         "%2C%22title%22%3A%22" + FA_TITLE + "%22%7D";
}

void authController()
{
  refreshToken = webServer.arg("refresh-token");

  webServer.send(200, "text/plain", String("Refresh token set: ") + refreshToken);
}

void rootController()
{
  webServer.sendHeader("Location", buildFirebaseAuthenticatorUrl(), true);
  webServer.send(302, "text/plain", "");
}

void obtainToken()
{
  String url = String(TOKEN_URL) + FIREBASE_API_KEY;

  Serial.println(url);
  Serial.print("Starting to obtain token...");

  String data = "grant_type=refresh_token&refresh_token=" + refreshToken;

  if (client.connect(TOKEN_HOST, 443))
  {
    client.println("POST " + url + " HTTP/1.1");
    client.println("Host: " + String(TOKEN_HOST));
    client.println("Connection: close");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.print("Content-Length: ");
    client.println(data.length());
    client.println();
    client.println(data);
    delay(100);
    String response = client.readString();
    Serial.println(response);
  }
  else
  {
    Serial.println("error");
  }

  authToken = "set";
}

void setup()
{
  // Configure Wi-Fi connection.
  Serial.begin(9600);
  WiFiManager wifiManager;
  wifiManager.autoConnect("IoT-Firebase-Authentication");
  Serial.println("Connected!");

  // Configure web server.
  webServer.on("/", rootController);
  webServer.on("/auth", authController);
  webServer.begin();
}

void loop()
{
  webServer.handleClient();

  if (refreshToken != "" && authToken == "")
  {
    obtainToken();
  }
}
