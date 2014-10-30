module.exports = (dal) ->
  modelDefinition =
    name: 'Authority'
    schemaDefinition:
      systemId: 'ObjectId'
      name: 'String'
      address: 'String'
      phoneOffice: 'String'
      phoneMobile: 'String'
      phoneOther: 'String'
      emailAddress: 'String'
      authorityType: 'String'
    options:
      collection: 'Authorities'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
