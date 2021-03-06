const router = require('express').Router()
const Sequelize = require('sequelize')
const CryptoJS = require('crypto-js')

module.exports = function(models) {
  User = models.User
  router.post('/create', function(req, res, next) {
    /* Password hash will be used as a sort of session token on the front end.
     * This method is used to create a user.
     */

    let hash = CryptoJS.SHA256(req.body.password)
    let hashString = hash.toString(CryptoJS.enc.Hex)

    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      passwordHash: hashString,
    })
      .then(row => {
        res.json({
          username: row.username,
          password: row.password,
        })
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  })
  /* Checks user's log-in credentials and returns hash-token to Vue.
   */
  router.post('/', function(req, res, next) {
    User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    })
      .then(row => {
        res.json({
          hash: row.passwordHash,
        })
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  })

  return router
}
