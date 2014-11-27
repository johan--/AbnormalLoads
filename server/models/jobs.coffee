module.exports = (dal) ->
  modelDefinition =
    name: 'Job'
    schemaDefinition:
      systemId: 'ObjectId'
      jobId: 'String'
      haulier: { id: 'ObjectId', haulierName: 'String', address: 'String' }
      councilAuthorities: ['Authority']
      policeAuthorities: ['Authority']
      otherAuthorities: ['Authority']
      dateOfNotice: 'Date'
      ref: 'String'
      dateFrom: 'Date'
      dateTo: 'Date'
      addressFrom: 'String'
      addressTo: 'String'
      route: 'String'
      vehicle: 'String'
      load: { id: 'ObjectId', name: 'String' }
      numberOfLoads: 'Number'
      return: 'Boolean'
      reg: 'String'
      numberOfComms: 'Number'
      history: ['History']
      price: 'Number'
      vat: 'Number'
      vatRate: 'Number'
      suffix: 'String'
    options:
      collection: 'Jobs'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
