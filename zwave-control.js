//var http = rquire('http')
var Client = require('node-rest-client').Client;
var client = new Client();
var baseurl = 'http://192.168.0.18' // Change this to where your HomeGenie API is


module.exports = function zwave(options) {

    this.add({ role: 'zwave', cmd: 'dimmer_on' }, function(msg, respond) {
        console.log('Z-Wave Dimmer ' + msg.id + ' On')
        client.get(baseurl + '/api/HomeAutomation.ZWave/' + msg.id + '/Control.On', function(data, response) {
            // parsed response body as js object
            console.log(data);
        });
        respond(null, { answer: 'ok' })
    })
    this.add({ role: 'zwave', cmd: 'dimmer_off' }, function(msg, respond) {
        console.log('Z-Wave Dimmer ' + msg.id + ' Off')
        client.get(baseurl + '/api/HomeAutomation.ZWave/' + msg.id + '/Control.Off', function(data, response) {
            // parsed response body as js object
            console.log(data);
        });
        respond(null, { answer: 'ok' })
    })
    this.add({ role: 'zwave', cmd: 'dimmer_level' }, function(msg, respond) {
        console.log('Z-Wave Dimmer ' + msg.id + ' Level ' + msg.level)
        client.get(baseurl + '/api/HomeAutomation.ZWave/' + msg.id + '/Control.Level/' + msg.level, function(data, response) {
            // parsed response body as js object
            console.log(data);
        });
        respond(null, { answer: 'ok' })
    })

}

