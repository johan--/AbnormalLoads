module.exports = (dal) ->
  modelDefinition =
    name: 'Enquiry'
    schemaDefinition:
      systemId: 'ObjectId'
      date: 'Date'
      #contact: ['Contact']
      details: 'String'
    options:
      collection: 'Enquiries'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
