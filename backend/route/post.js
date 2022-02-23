const express = require('express')
const router = express.Router()
const userController = require('./../controller/user')

console.log("test route")
router.post('/',userController.createUser)

module.exports = router
