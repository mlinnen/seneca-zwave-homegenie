var Client = require('node-rest-client').Client;
var client = new Client();

module.exports = function zwave(options) {
    var seneca = this;
    var role = options.role

    // Default options
    options = this.util.deepextend({
        baseurl: 'http://192.168.0.18'
    }, options)

    this.add({ role: role, cmd: 'control_on' }, function(msg, respond) {
        seneca.log.info('Z-Wave Dimmer ' + msg.id + ' On')
        client.get(options.baseurl + '/api/HomeAutomation.ZWave/' + msg.id + '/Control.On', function(data, response) {
            respond(null, { answer: 'ok' })
        });
    })
    this.add({ role: role, cmd: 'control_off' }, function(msg, respond) {
        seneca.log.info('Z-Wave Dimmer ' + msg.id + ' Off')
        client.get(options.baseurl + '/api/HomeAutomation.ZWave/' + msg.id + '/Control.Off', function(data, response) {
            respond(null, { answer: 'ok' })
        });
    })
    this.add({ role: role, cmd: 'control_level' }, function(msg, respond) {
        seneca.log.info('Z-Wave Dimmer ' + msg.id + ' Level ' + msg.level)
        client.get(options.baseurl + '/api/HomeAutomation.ZWave/' + msg.id + '/Control.Level/' + msg.level, function(data, response) {
            respond(null, { answer: 'ok' })
        });
    })

    return {
        name: role
    }
}

