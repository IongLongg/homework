const express = require('express')

const router = express.Router()

const controller = require('../controllers/load.controller')
const gameController = require('../controllers/game.controller')
const teamController = require('../controllers/team.controller')
const playerController = require('../controllers/player.controller')

router.get('/', controller.load)

router.get('/games', gameController.index)

router.get('/teams', teamController.index)

router.get('/players', playerController.index)


module.exports = router