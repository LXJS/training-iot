# Lesson 3: Deploying the AirPi application to the Raspberry Pi.

Most embedded devices in the real world are behind firewalls and live in extremely inaccessible places. There are also typically great number of them, making deploying and upgrading them on a device by device basis infeasible. 

Nitrogen has an application execution environment called Reactor that makes it easier to deploy applications to device fleets like this. In this lesson, we are going to use the Reactor to deploy an application to our AirPi equiped Raspberry Pi.

## Instructions

### Setup

1. Navigate to http://admin.nitrogen.io/#/apikeys and download a personalized Raspbian Nitrogen image. This is just Raspbian (the Debian distribution that comes with every Raspberry Pi) with a Nitrogen Reactor installed and preconfigured with your API key.
2. Power off the Raspberry Pi and remove the SD card.
3. Insert this SD card into your computer and flash this image to your SD card:
	* MacOSX instructions: 
		** sudo diskutil list (note X for your flash drive in the listing the follows in the form /dev/rdiskX)
		** sudo diskutil unmountDisk /dev/rdiskX 
		** sudo dd bs=128m if=raspbian.img of=/dev/rdiskX`
	* Windows instructions:
		** Install Win32DiskImager and use the GUI to burn the image to the SD card.

	* Linux instructions:
		** [Follow these instructions](http://xmodulo.com/2013/11/write-raspberry-pi-image-sd-card.html)

4. Once finished, insert the SD card into the Raspberry Pi and reconnect the its power.

### Instructions

1. Navigate to the "All" tab in the Nitrogen web admin.
2. Once the Raspberry Pi has finished booting, it will register itself with the Nitrogen service, and appear in this list.  It might take a minute or so. Relax and occasionally refresh until it appears.
3. In Nitrogen, an application is just an npm module.  Have a quick look at the implementation of the [AirPi device application](http://github.com/nitrogenjs/apps/device/airpi).
4. The [AirPi device application](https://github.com/nitrogenjs/apps/tree/master/device/fswebcam) builds on the application we've been using for the last two lessons. It wraps the code from the previous lesson into a Nitrogen application that is published as an npm module.
5. Deploy this application to the Raspberry Pi with `n2 reactor install 'Raspberry Pi' airpi`. This sends a message to the Raspberry Pi to ask it to install the npm module 'airpi' in a container called 'airpi' on the Raspberry Pi.
6. We can monitor this installation with `n2 reactor status 'Raspberry Pi'`. This will display the current state of the reactor as it moves from 'installing' to 'stopped' after the application is installed.
7. We can then start the application with `n2 reactor start 'Raspberry Pi' airpi`. This starts the application and calls its 'start' method.
8. Switch to Nitrogen's web admin. Navigate to your 'Airpi' device in the devices menu and look at its message stream. You should see the telemetry for this device start to flow in within a minute or so.
9. We'd like to add this device to the global climate monitoring web app that combines all of the devices on a map. Browse over to http://airpi.azurewebsites.net which should display a map of all the devices currently providing data. This application is open source and you can see how its implemented by 
10. Click on 'Add my AirPi' and grant access to the application to your AirPi. By default, your device is not accessible to anyone other that yourself. This step allows you to grant access to a set of devices to an application. In this case, the AirPi Visualization application is asking for access to all of the devices that emit climate related messages like 'temperature' or 'humidity' and asks you to grant access to them.
11. Once you have granted access, you'll be redirected back to the web application, and your AirPi should appear on the map.
12. In the Nitrogen web admin, if you navigate to the AirPi device again, and click on the 'Permissions' tab, you should be able to see the permissions that were granted to the Application for the device. If you later decided that you wanted to revoke these permissions for this application, you can delete them here.