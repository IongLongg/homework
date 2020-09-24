require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const teamRouter = require('./routers/team.router')
const playerRouter = require('./routers/player.router')
const gameRouter = require('./routers/game.router')


let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use('/teams', teamRouter)
app.use('/games', gameRouter)
app.use('/players', playerRouter)


app.listen(port);

console.log('RESTful API server started on: ' + port);

