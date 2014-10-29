module.exports = (dal) ->
  modelDefinition =
    name: 'AuthorityType'
    schemaDefinition:
      systemId: 'ObjectId'
      authorityType: 'String'
    options:
      collection: 'AuthorityTypes'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
