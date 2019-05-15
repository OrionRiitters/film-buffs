const router = require('express').Router()

module.exports = function(models) {
  let Event = models.Event
  router.get('/upcoming', function(req, res, next) {
    Event.findOne({
      where: {
        upcoming: true,
      },
    })
      .then(row => {
        res.json(row)
      })
      .catch(err => {
        console.log(err)
      })
  })

  router.get('/', function(req, res, next) {
    Event.findAll({
      where: {
        upcoming: false,
      },
    })
      .then(rows => {
        res.json(rows)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return router
}
