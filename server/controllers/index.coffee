gi = require 'gi-util'
customer = require(./customer.coffee)
ccf = gi.common.crudControllerFactory

module.exports = (app) ->
  #page: ccf app.models.pages
  #customer: ccf app.models.customers
  customer: customer app.models.customer
  test: ccf app.models.tests
  job: ccf app.models.jobs
  invoice: ccf app.models.invoices
  authority: ccf app.models.authorities
  load: ccf app.models.loads
  payment: ccf app.models.payments
