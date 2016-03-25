var seneca = require('seneca')()
    .client({host:"localhost" })
    .act({role: 'zwave', cmd: 'dimmer_on', id: 8}, console.log);
