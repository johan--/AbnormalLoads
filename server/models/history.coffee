module.exports = (dal) ->
  modelDefinition =
    name: 'History'
    schemaDefinition:
      systemId: 'ObjectId'
      date: 'Date'
      notes: 'String'
      user: 'String'
    options:
      collection: 'History'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
