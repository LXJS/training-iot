var BMP085 = require('bmp085');

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
    });

}, 1 * 1000);
