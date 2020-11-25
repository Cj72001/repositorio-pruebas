var express = require('express');
var router = express.Router();

var { getUser, getUsers, newUser } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/:userName', getUser);
router.get('/', getUsers);
router.post('/', newUser);

module.exports = router;
