var seneca = require('seneca')();
seneca.use('../zwave-control',{
    baseurl: 'http://192.168.0.18'
});

seneca.act({role: 'zwave', cmd: 'control_level', id: 8, level: 99}, console.log);
