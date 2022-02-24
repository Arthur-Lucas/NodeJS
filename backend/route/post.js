const express = require('express')
const router = express.Router()
const userController = require('./../controller/user')
const messageController = require('./../controller/message')
const conversationController = require('./../controller/conversation')
const auth = require('./../middleware/auth')

console.log("test route")
router.post('/',userController.createUser)
router.post('/login', userController.login)
router.post('/message', auth, messageController.postMessage)
router.post('/conversation', conversationController.postConversation)

module.exports = router
