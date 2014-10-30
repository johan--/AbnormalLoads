module.exports = (dal) ->
  modelDefinition =
    name: 'Job'
    schemaDefinition:
      systemId: 'ObjectId'
      haulier: 'ObjectId'
      authorities: ['Authority']
      ref: 'String'
      dateFrom: 'Date'
      dateTo: 'Date'
      addressFrom: 'String'
      addressTo: 'String'
      route: 'String'
      vehicle: 'String'
      load: 'Load'
      numberOfLoads: 'Integer'
      return: 'Bool'
      reg: 'String'
      numberOfComms: 'Number'
      history: ['History']
    options:
      collection: 'Jobs'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
