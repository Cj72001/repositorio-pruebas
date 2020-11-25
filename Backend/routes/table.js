var express = require('express')
var router = express.Router()

var { createTable, getTables } = require('../controllers/table.controller')

router.post('/create-table', createTable)
router.get('/get-tables/:belong', getTables)

module.exports = router