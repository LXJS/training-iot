# Lesson 3: Deploying the AirPi application to the Raspberry Pi.

Most embedded devices in the real world are behind firewalls and live in extremely inaccessible places. There are also typically a great number of them, making deploying and upgrading them one by one impossible. 

Nitrogen has an application execution environment called the Reactor that makes deploying applications to device fleets like this easier. In this lesson, we are going to use the Reactor to deploy an application to our AirPi equiped Raspberry Pi.  In Nitrogen, an application is just an npm module. You can see this by having a quick look at the implementation of the [AirPi device application](http://github.com/nitrogenjs/apps/device/airpi).

## Instructions

### Setup

1. Navigate to your [API Keys in Nitrogen's web admin](http://admin.nitrogen.io/#/apikeys) and download a personalized Raspbian Nitrogen image. This is just Raspbian (the Debian distribution that comes with every Raspberry Pi) with a Nitrogen Reactor installed and preconfigured with your API key.
2. Detach the power from the Raspberry Pi and remove the SD card.
3. Insert this SD card into your computer and flash this image to your SD card:

#### MacOS: 
  + sudo diskutil list (note X for your flash drive in the listing the follows in the form /dev/rdiskX)
  + sudo diskutil unmountDisk /dev/rdiskX 
  + sudo dd bs=128m if=raspbian.img of=/dev/rdiskX`

#### Windows:
  + Install Win32DiskImager and use the GUI to burn the image to the SD card.

#### Linux:
  + [Follow these instructions](http://xmodulo.com/2013/11/write-raspberry-pi-image-sd-card.html)

### Instructions

1. Navigate to the "All" tab in the [Nitrogen's web admin](https://admin.nitrogen.io).
2. Once the Raspberry Pi has finished booting, it will register itself with the Nitrogen service, and appear in this list.  It might take a minute or so.
3. The [AirPi device application](https://github.com/nitrogenjs/apps/tree/master/device/airpi) builds on the application we've been using for the last two lessons. It wraps the code from the previous lesson into a Nitrogen application that is published as the npm module 'airpi'.
5. Deploy this application to the Raspberry Pi with `n2 reactor install 'Raspberry Pi' airpi`. This sends a message to the Raspberry Pi to ask it to install the npm module 'airpi' in a container called 'airpi' on the Raspberry Pi.
6. We can monitor this installation with `n2 reactor state 'Raspberry Pi'`. This will display the current state of the reactor as it moves from 'installing' to 'stopped' once the application has finished installing in its container.
7. We can then start the application with `n2 reactor start 'Raspberry Pi' airpi`. This creates an isolated child process within the Reactor for the application, instatiates the application, and calls its 'start' method.
8. Confirm that the application has started with `n2 reactor state 'Raspberry Pi'`.
8. Switch to the [Nitrogen web admin](https://admin.nitrogen.io). Navigate to your 'Airpi' device and look at its message stream. You should see the telemetry for this device start to flow in within a minute or so.
9. Just watching telemetry is no fun by itself. Let's add this device to a global climate monitoring web app!
10. Browse to [the AirPi web application](http://airpi.azurewebsites.net) which will display a map of all the devices that have shared their data with this application.
10. Click on 'Add my AirPi' and grant access to the application to your AirPi. By default, your device and its data is not accessible to anyone other that yourself. This step allows you to grant access to a set of devices to an application. In this case, the AirPi Visualization application is asking for access to all of the devices that emit climate related messages like 'temperature' or 'humidity' and asks you to grant access to them.
11. Once you have granted access, you'll be redirected back to the web application, and your AirPi should appear on the map.
12. You can see what happened in this step by going to back to the [Nitrogen web admin](https://admin.nitrogen.io) and navigating to your AirPi device.Click on the 'Permissions' tab and you should be able to see the permissions that were granted to the Application for the device. If you later decided that you wanted to revoke these permissions for this application, you could delete them here and revoke further access to your data by the device.