path = require 'path'
dotenv = require 'dotenv'

dotenv.load
  file: '.env'
  directory: path.normalize __dirname + '/..'

express = require 'express'
gi = require 'gi-util'
dal = gi.common.dal.mongo
security = require 'gi-security'
conf = require './conf'
localModels = require './models'
localControllers = require './controllers'

routes = require './routes'

dir =  path.normalize __dirname + "/../client"

app = express()
server = require('http').createServer(app)

app.configure ->
  dal.connect conf.mongo
  app.use express.favicon(dir + '/img/favicon.ico')
  app.use express.cookieParser()
  app.use express.urlencoded()
  app.use express.json()

  sessionStore = dal.sessionStore express, conf.mongo
  sessionOpts =
    store: sessionStore
    secret: conf.security.sessionSecret

  app.use express.session(sessionOpts)

  app.use express.compress()

  #configure the static files directory
  app.use express.static dir

  #configure all of the security settings

  app.models = {}
  app.controllers = {}
  app.middleware = {}

  #mainly for the beneift of IE - we will explicitly define no cache
  #on all of our api routes
  app.use '/api', gi.middleware.noCache

  #configure the security plugin
  security.configure app, dal, conf.security

  #configure the gi-util plugin
  gi.configure app, dal

  #configure the local models
  models = localModels dal, app

  gi.common.extend app.models, models

  #register the resource types
  app.models['systems'].all (err, systems) ->
    systems.forEach (system) ->
      app.models.resources.registerTypes system._id, app.models

  #configure the local controllers
  gi.common.extend app.controllers, localControllers(app)

  #configure the local routes
  routes.configure app, dir
  console.log "Done it 2"

app.configure 'development', ->
  app.use express.errorHandler({ dumpExceptions: true, showStack: true })

app.configure 'production', ->
  app.use express.errorHandler()

app.configure 'test', ->
  app.use express.errorHandler({ dumpExceptions: true, showStack: true })

exports = module.exports = server

exports.use = () ->
  app.use.apply app, arguments
