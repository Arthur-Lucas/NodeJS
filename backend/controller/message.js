const Message = require('../models/message')
const jwt = require('jsonwebtoken');


exports.postMessage = (req,res,next)=> {
    console.log('message post')
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const m = new Message({
        text: req.body.text,
        author: userId,
        publishedAt: new Date()
    })
    m.save()
    .then(()=> res.status(200).json({message: 'message published'}))
    .catch(error => res.status(400).json({error}))
}

exports.getAllMessage = (req,res,next)=> {
    console.log('get all messages')
    Message.find()
        .then(messages => res.status(200).json(messages))
        .catch(error => res.status(400).json({error}));
}
