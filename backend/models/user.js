const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: {type: String, required:true, unique: true},
    username: {type: String, required:true, unique: true},
    password: {type: String, required:true},
}, {collection: 'user'})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema)