const mongoose = require('mongoose')
var Schema = mongoose.Schema

const messageSchema = mongoose.Schema({
    text : {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    conversation: {type: Schema.Types.ObjectId, ref: 'conversation', required:true},
    publishedAt: {type: Date, required:true}
}, {collection: 'message'})


module.exports = mongoose.model('message', messageSchema)