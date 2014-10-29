module.exports = (dal) ->
  modelDefinition =
    name: 'Authority'
    schemaDefinition:
      systemId: 'ObjectId'
      name: 'String'
      address: 'String'
      phone: 'String'
      emailAddress: 'String'
      authorityType: 'AuthorityType'
    options:
      collection: 'Authorities'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
