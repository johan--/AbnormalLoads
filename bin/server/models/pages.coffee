module.exports = (dal) ->
  modelDefinition =
    name: 'Page'
    schemaDefinition:
      systemId: 'ObjectId'
      path: 'String'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
