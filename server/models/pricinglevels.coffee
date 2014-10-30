module.exports = (dal) ->
  modelDefinition =
    name: 'PricingLevel'
    schemaDefinition:
      systemId: 'ObjectId'
      name: 'String'
      pricingForFirstX: 'Double'
      firstX: 'Number'
      pricingThereafter: 'Double'
    options:
      collection: 'PricingLevels'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
