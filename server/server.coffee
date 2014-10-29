port = process.env.APP_PORT ? process.argv.splice(2)[0] ? 8152
require('./app').listen port, () ->
  console.log 'listening on port ' + port
