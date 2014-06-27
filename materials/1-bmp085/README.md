# Lesson 1: BMP085 module

In this lesson, we are going to use the 'bmp085' module to measure temperature and pressure off of our AirPi device. The 'bmp085' module is just one of hundreds of modules that already exist for hardware devices in npm. In this case, this module is built on the 'i2c' module and uses I2C to communicate with the BMP085 chip on the AirPi.

## Instructions

1. Shell into your Raspberry Pi device using the ip address written on the bottom.
2. If it exists already from a previous session, delete /home/pi/training-iot
3. Clone the training repo:  git clone https://github.com/LXJS/training-iot
4. Write the code in device.js in this directory to 1) take the air temperature and pressure and 2) print it out.
5. Run `npm install` to fetch all of your dependencies.
6. Run `sudo node device.js` on the device.
