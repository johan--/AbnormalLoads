module.exports = (dal) ->
  modelDefinition =
    name: 'Contact'
    schemaDefinition:
      systemId: 'ObjectId'
      firstName: 'String'
      middleName : 'String'
      surname: 'String'
      telephone: 'String'
      mobile: 'String'
      email: 'String'
      address:
        houseNo: 'String'
        address1: 'String'
        address2: 'String'
        address3: 'String'
        address4: 'String'
        postcode: 'String'
        country: 'String'
    options:
      collection: 'Contacts'

  modelDefinition.schema = dal.schemaFactory modelDefinition
  model = dal.modelFactory modelDefinition
  dal.crudFactory model
