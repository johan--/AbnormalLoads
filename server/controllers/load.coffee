gi = require 'gi-util'

module.exports = (models) ->
  crud = gi.common.crudControllerFactory models.loads

  create = (req, res) ->
    models.counters.getNext "load", req.systemId, (err, cnt) ->
      if err
        res.json 500, {message: "counters.getNext: " + err}
      else
        id = Number(cnt)
        req.body.loadId = id
        crud.create req, res, () ->
          res.json 200, res.giResult

  handlers = gi.common.extend {}, crud
  handlers.create = create
  handlers
