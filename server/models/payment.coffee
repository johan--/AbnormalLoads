module.exports = (dal) ->
  modelDefinition =
    name: 'Payment'
    schemaDefinition:
      systemId: 'ObjectId'
      invoices: [ObjectId]
      customer: 'Customer'
      value: 'String'
    options:
      collection: 'Payments'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
