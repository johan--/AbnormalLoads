module.exports = (dal) ->
  modelDefinition =
    name: 'Payment'
    schemaDefinition:
      systemId: 'ObjectId'
      invoices: ['ObjectId']
      customer: 'ObjectId'
      value: 'Number'
      date: 'Date'
      notes: 'String'
    options:
      collection: 'Payments'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
