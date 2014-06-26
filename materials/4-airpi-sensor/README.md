# Task 4: Contribute your own sensor to the AirPi Nitrogen device (and win one)

The node.js module ecosystem has been made great by the many amazing contributions from people like you. The internet of things space is no different.

In this "extra credit" task, you can win a AirPi of your own by being the first to submit a high quality pull request that adds support for one of the other sensors on the AirPi board.

The Nitrogen project [maintains a set of devices](https://github.com/nitrogenjs/devices) that are very commonly used and the AirPi device that you used in the previous example is [maintained here](https://github.com/nitrogenjs/devices/blob/master/airpi/lib/index.js).

To tackle this project, fork the [devices project](https://github.com/nitrogenjs/devices) and tackle one of the sensors that has not been implemented.  There is a full bill of materials for the AirPi device on their [project site](http://airpi.es). The process you should go through to build this is the same as what we did in the first 2 lessons. There are often existing modules that you can leverage (hint hint). :)

It is preferrable that you follow the style of the existing sensors, which is to say there is a generic node.js module for the sensor itself, and an implementation that uses this to emit messages in the device project.

If accepted by the project, I'll give you one of the AirPi devices on Saturday afternoon.  Good luck! (and please feel free to bother me if you need help).