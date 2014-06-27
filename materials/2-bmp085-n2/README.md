# Lesson 2: BMP085 Nitrogen Device

In this lesson, we are going to build a device application that relays our temperature and pressure measurements to Nitrogen. Nitrogen is an open source platform that makes it easier to combine internet of things devices together into applications. As part of this training, we are going to build a fleet of devices that help us monitor the environment.

## Instructions

### Setup

1. If you haven't already, install the nitrogen command line tools on your computer with `npm install -g nitrogen-cli`
2. If you already have a Nitrogen account, log into it using `n2 user login <youremail@server.com>` to setup your credentials.
3. If you don't have a Nitrogen account, create one using `n2 user create` (this will also log you in on the command line tools)
4. Run `n2 apikeys ls` to get your api key and save it into your clipboard.

### Lesson Instructions

1. Shell into your device using the ip address written on the bottom from your computer using 'ssh 10.x.x.x'.  The username is 'pi' and the password is 'raspberry'.
2. All of the code you need for this training is in ~ (/home/pi).  This lesson starts from the code in 2-bmp085-n2.
3. Modify device.js to 1) add your api_key to the device security principal and 2) send the messages the BMP085 device measures to Nitrogen.
4. Run your device application: `sudo node device.js`
5. On your computer, open the [web admin](http://admin.nitrogen.io) in your browser and log in.
6. Click on 'devices':  You should see your newly created device in the list.
7. Click on your device in this list:  You should see the set of messages it has sent and new ones pop in as they arrive in real time.
