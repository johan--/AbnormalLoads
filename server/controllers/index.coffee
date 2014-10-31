gi = require 'gi-util'
ccf = gi.common.crudControllerFactory

module.exports = (app) ->
  #page: ccf app.models.pages
  customer: ccf app.models.customers
  test: ccf app.models.tests
  job: ccf app.models.jobs
  invoices: ccf app.models.invoices
  authorities: ccf app.models.authorities
  loads: ccf app.models.loads
  payment: ccf app.models.payment
