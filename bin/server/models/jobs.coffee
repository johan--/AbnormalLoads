module.exports = (dal) ->
  modelDefinition =
    name: 'Job'
    schemaDefinition:
      systemId: 'ObjectId'
      haulier: 'ObjectId'
      authorities: ['ObjectId']
      ref: 'String'
      dateFrom: 'Date'
      dateTo: 'Date'
      addressFrom: 'String'
      addressTo: 'String'
      route: 'String'
      vehicle: 'String'
      #load: 'Load'
      numberOfLoads: 'Number'
      return: 'Boolean'
      reg: 'String'
      numberOfComms: 'Number'
      #history: ['History']
      price: 'Number'
      vat: 'Number'
      vatRate: 'Number'
    options:
      collection: 'Jobs'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
