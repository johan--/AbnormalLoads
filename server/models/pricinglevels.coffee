module.exports = (dal) ->
  modelDefinition =
    name: 'PricingLevel'
    schemaDefinition:
      systemId: 'ObjectId'
      min: 'Number'
      max: 'Number'
      value: 'Number'
      fixedPrice: 'Number'
    options:
      collection: 'PricingLevels'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
