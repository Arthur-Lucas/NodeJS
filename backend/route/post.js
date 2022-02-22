const express = require('express')
const router = express.Router()
const postController = require('./../controller/post')

console.log("test route")
router.post('/',postController.createPost)
router.get('/:id',postController.getPostId)
router.get('/',postController.getAllPost)
router.put('/:id',postController.putPost)
router.delete('/:id',postController.deletePost)

module.exports = router
