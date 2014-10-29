gi = require 'gi-util'

module.exports = (models) ->
  crud = gi.common.crudControllerFactory models.enquiries

  handlers = gi.common.extend {}, crud
  handlers
