var express = require('express')
var router = express.Router()

var { createRoom, getRooms } = require('../controllers/room.controller')

router.post('/create-room', createRoom)
router.get('/get-rooms', getRooms)

module.exports = router
