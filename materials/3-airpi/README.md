# Lesson 3: Deploying the AirPi application to the Raspberry Pi.

Most embedded devices in the real world are behind firewalls and/or live in extremely inaccessible places. There are also typically a great number of them, making deploying and upgrading them one by one impossible.

Nitrogen has an application execution environment called the Reactor that makes deploying applications to device fleets like this easier. In Nitrogen, an application is just an npm module. You can see this by having a quick look at the implementation of the [AirPi device application](http://github.com/nitrogenjs/apps/device/airpi). In this lesson, we are going to use the Reactor to deploy an application to our AirPi equiped Raspberry Pi.  

## Instructions

### Setup

1. Navigate to your [API Keys in Nitrogen's web admin](http://admin.nitrogen.io/#/apikeys) and download a personalized Raspbian Nitrogen image. This is just Raspbian (the Debian distribution that comes with every Raspberry Pi) with a Nitrogen Reactor installed and preconfigured with your API key.
2. Using the 2nd SD card that was provided to you, flash this image to this 2nd card:  (PLEASE DO NOT FLASH THE CARD WITH THE TAPE ON IT!)

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
4. Create a device principal for the AirPi device itself: `n2 principal create --name 'AirPi' --type 'device' --apiKey '<YOUR API KEY>' --tags 'sends:temperature,sends:pressure'` This is the security context that the airpi application will execute under.
5. Deploy the airpi application to the Raspberry Pi: `n2 reactor install 'Raspberry Pi' airpi`. This sends a message to the Raspberry Pi to ask it to install the npm module 'airpi' in an instance called 'airpi' on your Raspberry Pi.
6. We can monitor this installation with `n2 reactor state 'Raspberry Pi'`. This will display the current state of the reactor as it moves from 'installing' to 'stopped' once the application has finished installing in its instance. This will take a few minutes as npm installs and compiles the native dependencies of the module.
7. We can then start the application with `n2 reactor start 'Raspberry Pi' airpi`. This creates an isolated child process within the Reactor for the application, instatiates the application, and calls its 'start' method.
8. Confirm that the application has started with `n2 reactor state 'Raspberry Pi'`. You can also see that this has happened via the [web admin](https://admin.nitrogen.io): click on the 'Raspberry Pi' reactor and the status will be updated in real time.
8. Switch to the [Nitrogen web admin](https://admin.nitrogen.io). Navigate to your 'Airpi' device and look at its message stream. You should see the telemetry for this device start to flow in within a minute or so.
9. Just watching telemetry is no fun by itself so let's add your device to a global climate monitoring app! First, click on 'Send Location' to send a location message for the device (using the location of your browser using HTML5) so that Nitrogen also knows where your device is located.
10. Browse to [the AirPi web application](http://airpi.azurewebsites.net/index.html) which will display a map of all the devices that have shared their data with this application.
10. Click on 'Add my AirPi' and grant access to the application to your AirPi. By default, your device and its data is not accessible to anyone other that your user security principal and the devie itself, but you can grant access to devices to an application. In this case, the AirPi Visualization web app is asking for access to all of the devices that emit climate related messages (like 'temperature' or 'pressure') and asks you to grant access to them.
11. Once you have granted access, you'll be redirected back to the web application, and your AirPi should appear on the map in a few seconds (when the next temperature or pressure measurement is received respectively).
12. You can see what happened in this step by going to back to the [Nitrogen web admin](https://admin.nitrogen.io) and navigating to your AirPi device.Click on the 'Permissions' tab: this will display the permissions that are granted to the Application for the device. If you later decided that you wanted to revoke these permissions for this application, you can delete them here.

That's it - you've taken a blank Raspberry Pi, installed a device application that captures climate information and relays it to the cloud, and then authorized a 3rd party application to use the data of that device. All with JavaScript!

If you got this far, come give me your twitter handles so I can enter you into the raffle for the Raspberry Pi Prototyping Plates.
