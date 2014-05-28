var config = require('./config') 
  ,	nitrogen = require('nitrogen')
  , BMP085Device = require('nitrogen-bmp085');

// The nitrogen-bmp085 module wraps the bmp085 module into a Nitrogen device that emits messages.
var bmp085 = new BMP085Device({
    name: 'BMP085 Device',
    nickname: 'bmp085',
    api_key: '/* 1. Add your API Key from the Nitrogen Web Admin here */'
});

var service = new nitrogen.Service(config);

// This establishes a session for your device with the Nitrogen service.
service.connect(bmp085, function(err, session) {
	if (err) return console.log('Failed to connect device: ' + err);

	setInterval(function() {

		// Sensor devices like the BMP085 device take measurements and callback with a set of  
		// Nitrogen messages.
		bmp085.measure(session, function(err, messages) {

		    // 2. Write the code to send these messages to the Nitrogen service.
		    // 3. Start this application on the device.
		    // 4. Go to http://admin.nitrogen.io on your computer.
		    // 5. You should see 'BMP085 Device' as part of the devices for the account whose api_key you used.
		    // 6. Click on this device and confirm that temperature and pressure messages are being received by the service every 30 seconds.

		});

	}, 30 * 1000);
