const mongoose = require('mongoose')
var Schema = mongoose.Schema

const messageSchema = mongoose.Schema({
    text : {type: String, required: true},
    author: {type: String, ref: 'user', required: true},
    publishedAt: {type: Date, required:true}
}, {collection: 'message'})


module.exports = mongoose.model('message', messageSchema)