const express = require('express')
const router = express.Router()
const TableController = require('../controllers/TableController')

router.get('/user', TableController.getTable)

module.exports = router