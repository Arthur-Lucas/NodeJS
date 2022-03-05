const express = require('express')
const router = express.Router()
const userController = require('./../controller/user')
const messageController = require('./../controller/message')
const auth = require('./../middleware/auth')

console.log("test route")
router.post('/register',userController.createUser)
router.post('/login', userController.login)
router.post('/message', auth, messageController.postMessage)
router.get('/conv', messageController.getAllMessage)

module.exports = router
