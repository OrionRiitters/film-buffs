const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const path = require('path')
const dotenv = require('dotenv')
const api_routes = require('./routes/api.js')
const models = require('./model/models.js')

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParser.json())
app.use('/api', api_routes(models))

app.use(function(req, res, next) {
  res.status(404).send('You have not found what you are looking for.')
})

app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Internal error')
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('app running on port', server.address().port)
})
