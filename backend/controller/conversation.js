const Conversation = require('../models/conversation')
const jwt = require('jsonwebtoken');


exports.postConversation = (req,res,next)=> {
    console.log('conversation post')
    const c = new Conversation({
        title: req.body.title,
    })
    c.save()
    .then(()=> res.status(200).json({message: 'conversation published'}))
    .catch(error => res.status(400).json({error}))
}
