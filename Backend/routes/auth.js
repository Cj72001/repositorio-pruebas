var express = require('express')
var router = express.Router()

var { signin, signup } = require('../controllers/auth.controller')

router.post('/signup', signup)
router.post('/signin', signin)

module.exports= router