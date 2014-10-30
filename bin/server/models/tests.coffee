module.exports = (dal) ->
  modelDefinition =
    name: 'Test'
    schemaDefinition:
      systemId: 'ObjectId'
      firstName: 'String'
      middleName : 'String'
      surname: 'String'
    options:
      collection: 'Tests'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
