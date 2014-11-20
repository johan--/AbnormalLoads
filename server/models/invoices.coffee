module.exports = (dal) ->
  modelDefinition =
    name: 'Invoice'
    schemaDefinition:
      systemId: 'ObjectId'
      invoiceId: 'String'
      haulier: 'ObjectId'
      jobs: [ { id: 'ObjectId', jobId: 'String', ref: 'String', price: 'Number', dateFrom: 'String', numberOfComms: 'Number' }]
      amount: 'Number'
      vat: 'Number'
      vatRate: 'Number'
      date: 'Date'
      paid: 'Boolean'
    options:
      collection: 'Invoices'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
