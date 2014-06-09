var config = require('./config') 
  ,	nitrogen = require('nitrogen')
  , BMP085 = require('bmp085');

// The nitrogen-bmp085 module wraps the bmp085 module into a Nitrogen device that emits messages.
var device = new nitrogen.Device({
    name: 'BMP085',
    nickname: 'bmp085',
    api_key: '/* 1. Add your API Key here */'
});

var service = new nitrogen.Service(config);

// This establishes a session for your device with the Nitrogen service.
service.connect(device, function(err, session) {
	if (err) return console.log('Failed to connect device: ' + err);

	var bmp085 = new BMP085({
	    mode:       1,
	    address:    0x77,
	    device:     "/dev/i2c-1"
	});

	setInterval(function() {

		bmp085.read(function(data) {
	        // the bmp085 / bmp180 returns presure in hPA
	        var pascals = data.pressure * 100.0;

	        console.log('The temperature is currently ' + data.temperature + 'C and the pressure is currently ' + pascals + ' pascals.');

	        var messages = [
	            new nitrogen.Message({
	                type: 'pressure',
	                body: {
	                    pressure: pascals
	                }
	            }),

	            new nitrogen.Message({
	                type: 'temperature',
	                body: {
	                    temperature: data.temperature
	                }
	            })
	        ];

	        nitrogen.Message.sendMany(session, messages);
	    });

	}, 30 * 1000);

});