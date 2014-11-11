gi = require 'gi-util'
job = require('./job')
ccf = gi.common.crudControllerFactory

module.exports = (app) ->
  #page: ccf app.models.pages
  #customer: ccf app.models.customers
  customer: ccf app.models.customers
  test: ccf app.models.tests
  job: job app.models
  invoice: ccf app.models.invoices
  authority: ccf app.models.authorities
  load: ccf app.models.loads
  payment: ccf app.models.payments
