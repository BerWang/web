
# Configuring ESP8266 Development Using the Arduino IDE

Install the Arduino IDE

Arduino > Preferences

Paste the following into the **Additional Boards Manager** box.

`http://arduino.esp8266.com/stable/package_esp8266com_index.json`

Click on OK to close the Preferences window

Tools > Boards > Board manager.

find `esp8266 by esp8266 community` and install.

## Writing Modular Code

Create a library.

## Sensors

| Environment              | Sensor       |
| ------------------------ | ------------ |
| Temperature              | DS18B20      |
| Temperature and humidity | DHT11        |
| Gas                      | MQ-135       |
| Hygrometer               | YL-69        |
| UV                       | GUVA-S12SD   |
| Light                    | TSL2561      |
| Dust                     | GP2Y1010AU0F |
| Dust                     | DSM501A      |
| Vibration                | SW-420       |
| Sound                    | KY-038       |


## References

http://www.instructables.com/id/Quick-Start-to-Nodemcu-ESP8266-on-Arduino-IDE/