
## Unit Testing C++ Code

In this tutorial we will be using the [Google Test](https://github.com/google/googletest) unit testing framework.

## Installation

Rather than provide instructions for different platforms there are already detailed instruction for [Linux](https://stackoverflow.com/questions/13513905/how-to-setup-googletest-as-a-shared-library-on-linux). [MacOS](https://github.com/iat-cener/tonatiuh/wiki/Installing-Google-Test-For-Mac) and [Windows](https://github.com/iat-cener/tonatiuh/wiki/Installing-Google-Test-For-Windows).

## Getting Started

Here is a [really good tutorial](https://www.ibm.com/developerworks/aix/library/au-googletestingframework.html) from IBM showing you how to write your first unit test suite.

## Unit Testing Arduino Code

https://stackoverflow.com/questions/780819/how-can-i-unit-test-arduino-code

https://github.com/mmurdoch/arduinounit/

### Arduino Emulators

https://github.com/maniacbug/ncore

https://github.com/buserror/simavr

## GitHub CovCom for CxxTest handout:

https://github.com/covcom/122COM/blob/2016-17_jan/testinglecture_handout.pdf

todo more

## Switching from the Arduino IDE to using VSCode

**Optionally** you can switch to using the VSCode IDE for Arduino development.  This IDE has numerous benefits over the Arduino IDE.

Steps to setting up VSCode for Arduino Development:
1. Install Arduino IDE
2. Install VS Code
3. In VS Code Open Folder for storing your C++ project and create C++ files and Arduino .ino files.
4. Install C++ extension in VSCode
5. Install Arduino extension in VSCode
6. In VSCode User Settings set:

```json
{
    "arduino.additionalUrls": "http://arduino.esp8266.com/stable/package_esp8266com_index.json"
}
```

7. In VSCode Board Manager Install esp8266
8. Ctrl-Shift-P  Change Board Type  Adafruit HUZZAH ESP8266
9. Set c_cpp_properties.json with paths to Arduino install
10. Force Intellisense to use the "Tag Parser" in the User Settings:
11. Set up the c_cpp_properties.json
https://github.com/Microsoft/vscode-arduino/issues/438


