const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    text : {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    conversation: {type: Schema.Types.ObjectId, ref: 'conversation', required:true},
    publishedAt: {type: timestamp, required:true}
})


module.exports = mongoose.model('message', messageSchema)