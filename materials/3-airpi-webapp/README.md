# Lesson 3: Granting access to the AirPi to a web application.

By default, Nitrogen does not share data with any other applications (or other security principals) in the system. In this lesson, we are going to see how we can explicitly grant permission to the data we are now collecting with our AirPi to a web application that plots the current state of all of the climate measurements we are making on a map.

### Instructions

1. From the [Nitrogen web admin](https://admin.nitrogen.io), click on 'Send Location' on the device's detail page to send a location message for the device (using the HTML5 location APIs of your browser) so that Nitrogen also knows where your device is located.
2. Browse to [the AirPi web application](http://airpi.cloudapp.net/index.html) which will display a map of all the devices that have shared their data with this application.
3. Click on 'Add my AirPi' and grant access to the application to your AirPi. By default, your device and its data is not accessible to anyone other that your user account and the device itself, but you can grant access to devices to an application. In this case, the AirPi Visualization web app is asking for access to all of the devices that emit climate related messages (like 'temperature' or 'pressure') and asks you to grant access to them.
4. Once you have granted access, you'll be redirected back to the web application, and your AirPi should appear on the map in a few seconds (when the next temperature or pressure measurement is received).
5. You can see what happened in this step by going to back to the [Nitrogen web admin](https://admin.nitrogen.io) and navigating to your AirPi device. Click on the 'Permissions' tab: this will display the permissions that are granted to the Application for the device. If you later decided that you wanted to revoke these permissions for this application, you can delete them here.

That's it - you've taken a blank Raspberry Pi, installed a device application that captures climate information and relays it to the cloud, and then authorized a 3rd party application to use the data of that device. All with JavaScript!

If you make it through these exercises, come give me your twitter handles so I can enter you into the raffle for the Raspberry Pi Prototyping Plates!
