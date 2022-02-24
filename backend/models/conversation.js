const mongoose = require('mongoose')

const conversationSchema = mongoose.Schema({
    title : {type: String, required: true},

}, {collection: 'conversation'})


module.exports = mongoose.model('conversation', conversationSchema)