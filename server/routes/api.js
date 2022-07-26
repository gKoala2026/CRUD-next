const express = require('express')
const router = express.Router()
const TableController = require('../controllers/TableController')

router.get('/table', TableController.getTable)
router.post('/table/add', TableController.addUser)
router.post('/table/update', TableController.updateUser)
router.post('/table/delete', TableController.delUser)

module.exports = router