require('seneca')()
  .use('zwave-control')
  .listen({host:"localhost" })