module.exports = (dal) ->
  modelDefinition =
    name: 'Job'
    schemaDefinition:
      systemId: 'ObjectId'
      jobId: 'String'
      #haulier: { id: 'ObjectId', haulierName: 'String', address: 'String' }
      haulier:
        type: 'ObjectId'
        ref: 'Customer'
      haulierName: 'String'
      councilAuthorities: ['Authority']
      policeAuthorities: ['Authority']
      otherAuthorities: ['Authority']
      createdOn: 'Date'
      ref: 'String'
      dateFrom: 'Date'
      dateTo: 'Date'
      addressFrom: 'String'
      addressTo: 'String'
      route: 'String'
      vehicle: 'String'
      load:
        type: 'ObjectId'
        ref: 'Load'
      loadName: 'String'
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
