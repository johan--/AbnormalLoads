_ = require 'underscore'

servers = []
if process.env['MONGO_HOSTS']?
  hosts = process.env['MONGO_HOSTS'].split(',') || ['localhost:27017']
else
  host = process.env['MONGO_HOST'] || 'localhost'
  port = process.env['MONGO_PORT'] || '27017'
  hosts = [host + ':' + port]

_.each hosts, (h) ->
  splits = h.split(':')

  server =
    host: splits[0]
    port: splits[1]

  servers.push server

module.exports =
  mongo:
    servers: servers
    name: process.env['MONGO_NAME'] || 'abnormalloads'
  security:
    sessionSecret: process.env['SESSION_SECRET'] || 'secret'
