gi = require 'gi-util'

configure = (app, dir) ->
  #
  # json/api routes
  #

  gi.common.rest.routeResource 'tests'
  , app, app.middleware.publicAction, app.controllers.test

  gi.common.rest.routeResource 'customers'
  , app, app.middleware.publicAction, app.controllers.customer

  gi.common.rest.routeResource 'loads'
  , app, app.middleware.publicAction, app.controllers.load

  gi.common.rest.routeResource 'authorities'
  , app, app.middleware.publicAction, app.controllers.authority

  app.get '*', app.middleware.publicAction, (req, res) ->
    res.sendfile "#{dir}/index.html"

exports.configure = configure
