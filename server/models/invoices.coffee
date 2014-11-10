module.exports = (dal) ->
  modelDefinition =
    name: 'Invoice'
    schemaDefinition:
      systemId: 'ObjectId'
      jobs: ['ObjectId']
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
