const router = require('express').Router()

module.exports = function(models) {
    let Comment = models.Comment
    let User = models.User
    router.get('/', function(req, res, next) {
        return Comment.findAll({
            where: {
                EventID: req.query.eventID
            },
            order: ['date', 'DESC']
        }).then(rows => {
            res.json(rows)
        })
    })

    router.post('/', function(req, res, next) {
         User.findOne({
            where: {
                passwordHash: req.body.token
            }
        })
            .then(row => {
                Comment.create({
                    UserID: row.id,
                    date: new Date(),
                    content: req.body.commentText,
                    EventID: req.body.eventID
                }).then(row => {
                    res.json(row)
                })
                    .catch(err => {
                        console.log(err)
                    })
            }).catch(err => {
                console.log(err)
            })
    })

  return router
}
