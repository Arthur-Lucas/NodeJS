const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    title : {type: String, required: true},

})


module.exports = mongoose.model('conversation', messageSchema)