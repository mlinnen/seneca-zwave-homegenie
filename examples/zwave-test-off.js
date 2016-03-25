var seneca = require('seneca')()
    .client({host:"localhost" })
    .act({role: 'zwave', cmd: 'control_off', id: 8}, console.log);
