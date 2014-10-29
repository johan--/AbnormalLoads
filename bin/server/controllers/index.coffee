gi = require 'gi-util'
ccf = gi.common.crudControllerFactory

module.exports = (app) ->
  #page: ccf app.models.pages
  #customer: ccf app.models.customers
  enquiry: ccf app.models.enquiries
