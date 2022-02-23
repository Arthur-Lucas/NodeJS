const express = require('express')
const router = express.Router()
const userController = require('./../controller/user')
const auth = require('./../middleware/auth')

console.log("test route")
router.post('/',userController.createUser)
router.post('/login', userController.login)




module.exports = router
