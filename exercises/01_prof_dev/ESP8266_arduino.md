
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

| Environment                              | Sensor       | Tutorial              |
| ---------------------------------------- | ------------ | --------------------- |
| Temperature                              | DS18B20      | https://goo.gl/aNBgtK |
| Temperature and humidity                 | DHT11        | https://goo.gl/xdoFG6 |
| NH3,NOx, alcohol, Benzene, smoke, CO2    | MQ-135       | https://goo.gl/zxCetD |
| Hygrometer                               | YL-69        | -                     |
| UV                                       | GUVA-S12SD   | https://goo.gl/3s6J4o |
| Light                                    | TSL2561      | https://goo.gl/YUftqv |
| Dust                                     | GP2Y1010AU0F | https://goo.gl/MTNiyf |
| Dust                                     | DSM501A      | -                     |
| Vibration                                | SW-420       | https://goo.gl/4tNLi5 |
| Sound                                    | KY-038       | https://goo.gl/bCxrXF |
| Combustible Gas, Smoke                   | MQ-2         | https://goo.gl/2fBk1t |
| Alcohol gas                              | MQ-3         | -                     |
| CH4 / Natural gas                        | MQ-4         | -                     |
| LPG, Natural Gas, Town Gas               | MQ-5 MQ-6    | -                     |
| CO (carbon monoxide)                     | MQ-7         | -                     |
| Hydrogen                                 | MQ-8         | -                     |
| Carbon Monoxide, Coal Gas, Liquefied Gas | MQ-9         | -                     |

## Equipment List

Below is a full costed kit list that includes the microcontroller, breadboard and all sensors. Prices and links are for Amazon but you can find these a lot cheaper if you shop around and you may be able to find some of this kit in the electronics lab (ask the supervisor in the lab first). _You will be provided with kit to use in the lab sessions but may wish to purchase your own_.

| Equipment                                                   | Cost  |
| ----------------------------------------------------------- | ----- |
| [NodeMCU ESP8266 CP2102 v3](http://amzn.eu/iFhW1f4)         | £6.99 |
| [USB type-c to Micro-b 15cm cable](http://amzn.eu/0EwGYjA)  | £5.51 |
| [Micro-USB cable 30cm](http://amzn.eu/eJ6z1Ux)              | £3.99 |
| [Breadboard with power supply](http://amzn.eu/6R8H6Oi)      | £8.38 |
| [Jumper wires x130](http://amzn.eu/buVG3Wk)                 | £5.99 |
| [Rechargable 9v battery](http://amzn.eu/6kKladh)            | £5.78 |
| [Temperature sensor module DS18B20](http://amzn.eu/6h2mzBC) | £1.35 |
| [Temperature/Humidity module DHT11](http://amzn.eu/glrhIqs) | £1.46 |
| [Gas sensor MQ-135](http://amzn.eu/h573jLl)                 | £5.60 |
| [UV sensor KS-204 GUVA-S12SD](http://amzn.eu/5KNJy0x)       | £5.29 |
| [Light sensor GY-2561 TSL2561](http://amzn.eu/a07k83G)      | £1.62 |
| [Vibration sensor SW-420](http://amzn.eu/crleUBd)           | £1.76 |
| [Sound sensor KY-038](http://amzn.eu/3tkqZG2)               | £3.60 |
| [Dust sensor GP2Y1010AU0F](http://amzn.eu/5xqZT1y)          | £8.76 |
| [Stanley storage box](http://amzn.eu/hyI4x9J)               | £7.30 |

## References

http://www.instructables.com/id/Quick-Start-to-Nodemcu-ESP8266-on-Arduino-IDE/
