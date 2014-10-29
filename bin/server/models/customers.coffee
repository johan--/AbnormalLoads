module.exports = (dal) ->
  modelDefinition =
    name: 'Customer'
    schemaDefinition:
      systemId: 'ObjectId'
      name: 'String'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
