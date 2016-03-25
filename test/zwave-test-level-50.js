var seneca = require('seneca')()
    .client({host:"localhost" })
    .act({role: 'zwave', cmd: 'dimmer_level', id: 8, level: 50}, console.log);
