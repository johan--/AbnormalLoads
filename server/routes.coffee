gi = require 'gi-util'

configure = (app, dir) ->
  #
  # json/api routes
  #

  gi.common.rest.routeResource 'enquiries'
  , app, app.middleware.publicAction, app.controllers.enquiry

  gi.common.rest.routeResource 'tests'
  , app, app.middleware.publicAction, app.controllers.test

  app.get '*', app.middleware.publicAction, (req, res) ->
    res.sendfile "#{dir}/index.html"

exports.configure = configure
