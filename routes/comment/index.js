const router = require('express').Router()

module.exports = function(models) {
  let Comment = models.Comment
  let User = models.User

  router.get('/', function(req, res, next) {
    return Comment.findAll({
      where: {
        EventID: req.query.eventID,
      },
      include: [User],
    }).then(rows => {
      let response = []
      for (let row in rows) {
        response.push({
          EventID: rows[row].EventID,
          date: rows[row].date,
          content: rows[row].content,
          username: rows[row].User.dataValues.username,
        })
      }
      res.json(response)
    })
  })

  router.post('/', function(req, res, next) {
    User.findOne({
      where: {
        passwordHash: req.body.token,
      },
    })
      .then(row => {
        Comment.create({
          UserID: row.id,
          date: new Date(),
          content: req.body.content,
          EventID: req.body.eventID,
        })
          .then(row => {
            res.json(row)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })

  return router
}
