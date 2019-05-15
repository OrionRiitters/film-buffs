const router = require('express').Router()

module.exports = function(models) {
    let Comment = models.Comment
    router.get('/', function(req, res, next) {
        return Comment.findAll({
            where: {
                EventID: req.body.eventID
            }
        }).then(rows => {
            res.json(rows)
        })
    })



  return router
}
