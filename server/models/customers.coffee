module.exports = (dal) ->
  modelDefinition =
    name: 'Customer'
    schemaDefinition:
      systemId: 'ObjectId'
      customerId: 'String'
      customerCode: 'String'
      haulierName: 'String'
      haulierFAOContactName: 'String'
      address: 'String'
      postcode: 'String'
      tel: 'String'
      fax: 'String'
      emailAddress: 'String'
      license: 'String'
      regNo: 'String'
      pricingLevel: ['PricingLevel']
      balance: {type: 'Number', default: 0}
    options:
      collection: 'Customers'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
