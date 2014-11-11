gi = require 'gi-util'
job = require('./job')
customer = require('./customer')
authority = require('./authority')
load = require('./load')
payment = require('./payment')
invoice = require('./invoice')
ccf = gi.common.crudControllerFactory

module.exports = (app) ->
  #page: ccf app.models.pages
  #customer: ccf app.models.customers
  customer: customer app.models
  test: ccf app.models.tests
  job: job app.models
  invoice: invoice app.models
  #authority: ccf app.models.authorities
  authority: authority app.models

  load: load app.models
  payment: payment app.models
