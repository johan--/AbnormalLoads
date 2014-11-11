module.exports = (dal) ->
  modelDefinition =
    name: 'Job'
    schemaDefinition:
      systemId: 'ObjectId'
      jobId: 'String'
      haulier: 'ObjectId'
      councilAuthorities: ['Authority']
      policeAuthorities: ['Authority']
      otherAuthorities: ['Authority']
      ref: 'String'
      dateFrom: 'Date'
      dateTo: 'Date'
      addressFrom: 'String'
      addressTo: 'String'
      route: 'String'
      vehicle: 'String'
      load: 'ObjectId'
      numberOfLoads: 'Number'
      return: 'Boolean'
      reg: 'String'
      numberOfComms: 'Number'
      history: ['History']
      price: 'Number'
      vat: 'Number'
      vatRate: 'Number'
    options:
      collection: 'Jobs'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
