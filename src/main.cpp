#include <Arduino.h>
#include <ArduinoJson.h>
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

// Firebase API.
#define FIREBASE_API_HOST F("www.googleapis.com")
#define FIREBASE_API_USER_URL F("/identitytoolkit/v3/relyingparty/getAccountInfo?key=")

// Secure token API.
#define SECURE_TOKEN_API_HOST F("securetoken.googleapis.com")
#define SECURE_TOKEN_API_URL F("/v1/token?key=")

ESP8266WebServer webServer(80);
WiFiClientSecure client;

String currentAccessToken = "";
String currentIdToken = "";
String currentProjectId = "";
String currentRefreshToken = "";
String currentUserId = "";

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

String readResponse()
{
  boolean areHeadersSkipped = false;
  String response;

  while (client.connected() || client.available())
  {
    if (client.available())
    {
      String line = client.readStringUntil('\n');

      if (areHeadersSkipped)
      {
        response += line;
      }

      // Empty string is a separator before the data.
      if (line == "\r")
      {
        areHeadersSkipped = true;
      }
    }
  }

  return response;
}

boolean obtainTokens(String refreshToken)
{
  Serial.print(F("Obtaining tokens for the following refresh token: "));
  Serial.println(refreshToken);

  // TODO: Verify fingerprint (faced with SHA1 issue with Google API).
  if (client.connect(SECURE_TOKEN_API_HOST, 443))
  {
    String url = String(SECURE_TOKEN_API_URL) + FIREBASE_API_KEY;
    String data = String(F("grant_type=refresh_token&refresh_token=")) + refreshToken;

    // Send request.
    client.print(F("POST "));
    client.print(url + F(" HTTP/1.1\r\nHost: "));
    client.println(SECURE_TOKEN_API_HOST);
    client.print(F("Connection: close\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: "));
    client.println(data.length());
    client.println();
    client.println(data);

    // Read response.
    String response = readResponse();
    client.stop();

    // Parse response.
    const size_t bufferSize = JSON_OBJECT_SIZE(7) + 3056;
    DynamicJsonBuffer jsonBuffer(bufferSize);
    JsonObject &json = jsonBuffer.parseObject(response);

    if (!json.success())
    {
      Serial.println(F("Tokens obtaining failed because of JSON parsing failure"));

      return false;
    }

    // Store values.
    currentAccessToken = json[F("access_token")].as<String>();

    // We need to check for empty values even if the parsing successful.
    if (currentAccessToken == "")
    {
      Serial.println(F("Tokens obtaining failed because of empty access token"));

      return false;
    }

    currentIdToken = json[F("id_token")].as<String>();
    currentProjectId = json[F("project_id")].as<String>();
    currentRefreshToken = json[F("refresh_token")].as<String>();
    currentUserId = json[F("user_id")].as<String>();

    Serial.println(F("The following tokens obtained:"));
    Serial.print(F("Access token: "));
    Serial.println(currentAccessToken);
    Serial.print(F("ID token: "));
    Serial.println(currentIdToken);
    Serial.print(F("Project ID: "));
    Serial.println(currentProjectId);
    Serial.print(F("Refresh token: "));
    Serial.println(currentRefreshToken);
    Serial.print(F("User ID: "));
    Serial.println(currentUserId);

    return true;
  }

  Serial.println(F("Tokens obtaining failed because of connection failure"));

  client.stop();

  return false;
}

String getAccountInfo(String idToken)
{
  Serial.print(F("Getting account info for the following ID token: "));
  Serial.println(idToken);

  // TODO: Verify fingerprint (faced with SHA1 issue with Google API).
  if (client.connect(FIREBASE_API_HOST, 443))
  {
    String url = String(FIREBASE_API_USER_URL) + FIREBASE_API_KEY;
    String data = String(F("{\"idToken\":\"")) + idToken + F("\"}");

    // Send request.
    client.print(F("POST "));
    client.print(url + F(" HTTP/1.1\r\nHost: "));
    client.println(FIREBASE_API_HOST);
    client.print(F("Connection: close\r\nContent-Type: application/json\r\nContent-Length: "));
    client.println(data.length());
    client.println();
    client.println(data);

    // Read response.
    String response = readResponse();
    client.stop();

    return response;
  }

  Serial.println(F("Account info getting failed because of connection failure"));

  client.stop();

  return "";
}

void authController()
{
  Serial.println(F("Auth controller invoked"));

  String refreshToken = webServer.arg(F("refresh-token"));

  // Obtain tokens for the refresh token and redirect user to the home page in case of success.
  if (refreshToken != "" && obtainTokens(refreshToken))
  {
    webServer.sendHeader(F("Location"), "/", true);
    webServer.send(302, F("text/plain"), F("302 Found"));

    return;
  }

  webServer.send(400, F("text/plain"), F("400 Bad Request"));
}

void homeController()
{
  Serial.println(F("Home controller invoked"));

  // Redirect user to the Firebase Authenticator if not authenticated yet.
  if (currentRefreshToken == "")
  {
    webServer.sendHeader(F("Location"), buildFirebaseAuthenticatorUrl(), true);
    webServer.send(302, F("text/plain"), F("302 Found"));

    return;
  }

  webServer.send(200, F("text/plain"), F("Signed in"));
}

void logoutController()
{
  Serial.println(F("Logout controller invoked"));

  currentAccessToken = "";
  currentIdToken = "";
  currentProjectId = "";
  currentRefreshToken = "";
  currentUserId = "";

  webServer.send(200, F("text/plain"), F("Signed out"));
}

void notFoundController()
{
  Serial.println(F("Not found controller invoked"));

  webServer.send(404, F("text/plain"), F("404 Not Found"));
}

void userController()
{
  Serial.println(F("User controller invoked"));

  if (currentIdToken == "")
  {
    webServer.send(401, F("text/plain"), F("401 Unauthorized"));

    return;
  }

  webServer.send(200, F("text/plain"), getAccountInfo(currentIdToken));
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

  webServer.on("/", homeController);
  webServer.on(F("/auth"), authController);
  webServer.on(F("/logout"), logoutController);
  webServer.on(F("/user"), userController);
  webServer.onNotFound(notFoundController);
  webServer.begin();

  Serial.print(F("Web server started on "));
  Serial.print(WiFi.localIP());
  Serial.println(F(" IP address"));
}

void loop()
{
  webServer.handleClient();
}
