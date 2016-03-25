var seneca = require('seneca')()
    .client({host:"localhost" })
    .act({role: 'zwave', cmd: 'control_level', id: 8, level: 50}, console.log);
