#include <Arduino.h>
#include <DNSServer.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266WiFi.h>
#include <WiFiManager.h>

// Firebase Authenticator configuration.
#define FA_ID F("ec825010-06f8-11e9-b21e-c56254554cee")
#define FA_REDIRECT_PATH F("%2Fauth%3Frefresh-token%3D%25refreshToken%25")
#define FA_REDIRECT_REFRESH_TOKEN_PLACEHOLDER F("%25refreshToken%25")
#define FA_SIGN_IN_OPTION_EMAIL true
#define FA_SIGN_IN_OPTION_GITHUB true
#define FA_SIGN_IN_OPTION_GOOGLE true
#define FA_TITLE F("IoT-Firebase-Authentication")
#define FA_URL F("https://loginov-rocks.github.io/Firebase-Authenticator/")

// Firebase web app configuration.
#define FIREBASE_API_KEY F("AIzaSyBxfVaUJqHWxcTzj3rFtbMfg9LVuGKQyKU")
#define FIREBASE_AUTH_DOMAIN F("iot-firebase-authentication.firebaseapp.com")
#define FIREBASE_DATABASE_URL F("https%3A%2F%2Fiot-firebase-authentication.firebaseio.com")
#define FIREBASE_MESSAGING_SENDER_ID F("268298190354")
#define FIREBASE_PROJECT_ID F("iot-firebase-authentication")
#define FIREBASE_STORAGE_BUCKET F("iot-firebase-authentication.appspot.com")

// Google Secure Token API.
#define GOOGLE_SECURE_TOKEN_HOST F("securetoken.googleapis.com")
#define GOOGLE_SECURE_TOKEN_URL F("/v1/token?key=")

ESP8266WebServer webServer(80);
WiFiClientSecure client;

String authToken = "";
String refreshToken = "";

String ip2string(IPAddress ip)
{
  String string = "";

  for (int i = 0; i < 3; i++)
  {
    string += String((ip >> (8 * i)) & 0xFF) + ".";
  }

  string += String(((ip >> 8 * 3)) & 0xFF);

  return string;
}

String buildFirebaseAuthenticatorSignInOptions()
{
  String string = F("%5B");

  // TODO: Add commas in the right way.
  if (FA_SIGN_IN_OPTION_EMAIL)
  {
    string += F("%22email%22%2C");
  }
  if (FA_SIGN_IN_OPTION_GITHUB)
  {
    string += F("%22github%22%2C");
  }
  if (FA_SIGN_IN_OPTION_GOOGLE)
  {
    string += F("%22google%22");
  }

  string += F("%5D");

  return string;
}

String buildFirebaseAuthenticatorUrl()
{
  IPAddress myIp = WiFi.localIP();
  String redirectUrl = String(F("http%3A%2F%2F")) + ip2string(myIp) + FA_REDIRECT_PATH;

  return String(FA_URL) +
         F("?firebase-app=%7B%22config%22%3A%7B%22apiKey%22%3A%22") + FIREBASE_API_KEY +
         F("%22%2C%22authDomain%22%3A%22") + FIREBASE_AUTH_DOMAIN +
         F("%22%2C%22databaseURL%22%3A%22") + FIREBASE_DATABASE_URL +
         F("%22%2C%22messagingSenderId%22%3A%22") + FIREBASE_MESSAGING_SENDER_ID +
         F("%22%2C%22projectId%22%3A%22") + FIREBASE_PROJECT_ID +
         F("%22%2C%22storageBucket%22%3A%22") + FIREBASE_STORAGE_BUCKET +
         F("%22%7D%2C%22id%22%3A%22") + FA_ID +
         F("%22%2C%22redirect%22%3A%7B%22refreshTokenPlaceholder%22%3A%22") + FA_REDIRECT_REFRESH_TOKEN_PLACEHOLDER +
         F("%22%2C%22url%22%3A%22") + redirectUrl +
         F("%22%7D%2C%22signInOptions%22%3A") + buildFirebaseAuthenticatorSignInOptions() +
         F("%2C%22title%22%3A%22") + FA_TITLE +
         F("%22%7D");
}

void authController()
{
  Serial.println(F("Auth controller invoked"));

  refreshToken = webServer.arg(F("refresh-token"));

  Serial.print(F("Refresh token received: "));
  Serial.println(refreshToken);

  webServer.send(200, F("text/plain"), String(F("Refresh token set: ")) + refreshToken);
}

void rootController()
{
  Serial.println(F("Root controller invoked"));

  webServer.sendHeader(F("Location"), buildFirebaseAuthenticatorUrl(), true);
  webServer.send(302, F("text/plain"), "");
}

void updateTokens()
{
  Serial.println(F("Updating tokens..."));

  // TODO: Verify fingerprint (faced with SHA1 issue with Google API).
  if (client.connect(GOOGLE_SECURE_TOKEN_HOST, 443))
  {
    String url = String(GOOGLE_SECURE_TOKEN_URL) + FIREBASE_API_KEY;
    String data = String(F("grant_type=refresh_token&refresh_token=")) + refreshToken;

    // Send request.
    client.print(F("POST "));
    client.print(url + F(" HTTP/1.1\r\nHost: "));
    client.println(GOOGLE_SECURE_TOKEN_HOST);
    client.print(F("Connection: close\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: "));
    client.println(data.length());
    client.println();
    client.println(data);

    // Wait for the response.
    while (client.connected() || client.available())
    {
      if (client.available())
      {
        // TODO: Parse response and store needed data.
        String line = client.readStringUntil('\n');
        Serial.println(line);
      }
    }

    Serial.println(F("Tokens updated"));
  }
  else
  {
    Serial.println(F("Tokens are not updated, reason: connection failure"));
  }

  client.stop();

  // TODO: Set the auth token in the right way.
  authToken = "set";
}

void setup()
{
  Serial.begin(115200);

  // Wi-Fi connection setup.
  Serial.println(F("Establishing Wi-Fi connection..."));

  WiFiManager wifiManager;
  wifiManager.autoConnect("IoT-Firebase-Authentication");

  Serial.println(F("Wi-Fi connection established"));

  // Web server setup.
  Serial.println(F("Starting web server..."));

  webServer.on(F("/"), rootController);
  webServer.on(F("/auth"), authController);
  webServer.begin();

  Serial.print(F("Web server started on "));
  Serial.print(WiFi.localIP());
  Serial.println(F(" IP address"));
}

void loop()
{
  webServer.handleClient();

  if (refreshToken != "" && authToken == "")
  {
    updateTokens();
  }
}
