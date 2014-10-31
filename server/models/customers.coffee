module.exports = (dal) ->
  modelDefinition =
    name: 'Customer'
    schemaDefinition:
      systemId: 'ObjectId'
      haulierName: 'String'
      haulierFAOContactName: 'String'
      address: 'String'
      postcode: 'String'
      tel: 'String'
      fax: 'String'
      license: 'String'
      regNo: 'String'
      pricingLevel: ['PricingLevel']
    options:
      collection: 'Customers'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
