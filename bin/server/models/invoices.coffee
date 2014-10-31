module.exports = (dal) ->
  modelDefinition =
    name: 'Invoice'
    schemaDefinition:
      systemId: 'ObjectId'
      jobs: ['ObjectId']
      amount: 'Number'
      vat: 'Number'
      vatRate: 'Number'
    options:
      collection: 'Invoices'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
