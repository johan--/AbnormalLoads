gi = require 'gi-util'

module.exports = (models) ->
  crud = gi.common.crudControllerFactory models.authorities

  create = (req, res) ->
    models.counters.getNext "authority", req.systemId, (err, cnt) ->
      if err
        res.json 500, {message: "counters.getNext: " + err}
      else
        id = Number(cnt)
        req.body.authorityId = id
        crud.create req, res, () ->
          res.json 200, res.giResult

  handlers = gi.common.extend {}, crud
  handlers.create = create
  handlers
