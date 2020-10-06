const express = require('express')
const router = express.Router()

const controller = require('../controllers/team.controller')
const middleware = require('../middleware/request.validate')

router.get('/', controller.index)

router.get('/:id', middleware.getById ,controller.getById)

module.exports = router
