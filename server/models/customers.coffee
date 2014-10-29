module.exports = (dal) ->
  modelDefinition =
    name: 'Customer'
    schemaDefinition:
      systemId: 'ObjectId'
      haulierName: 'String'
      haulierFAOContactName: 'String'
      address: 'String'
      tel: 'String'
      fax: 'String'
      license: 'String'
      regNo: 'String'
    options:
      collection: 'Customers'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
