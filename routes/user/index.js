const router = require('express').Router()
const Sequelize = require('sequelize')

module.exports = function(User) {
  router.post('/', function(req, res, next) {
    User.findOne({
      options: {
        where: {
          token: req.body.token,
        },
      },
    })
      .then(row => {
        if (row != null) {
          console.log(row)
        } else {
        }
      })
      .catch(err => {
        console.log(err)
      })
  })

  return router
}
