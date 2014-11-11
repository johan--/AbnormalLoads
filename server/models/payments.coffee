module.exports = (dal) ->
  modelDefinition =
    name: 'Payment'
    schemaDefinition:
      systemId: 'ObjectId'
      paymentId: 'String'
      invoices: [ { id: 'ObjectId', invoiceId: 'String' }]
      customer: 'ObjectId'
      value: 'Number'
      date: 'Date'
      notes: 'String'
    options:
      collection: 'Payments'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
