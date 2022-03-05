const Message = require('../models/message')
const jwt = require('jsonwebtoken');
const user = require('../models/user');


exports.postMessage = (req,res,next)=> {
    console.log('message post')
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    user.findOne({_id:userId})
    .then((data) =>
        {
            const m = new Message({
                text: req.body.text,
                author: data.username,
                publishedAt: new Date()
            })
            m.save()
            .then(()=> res.status(200).json({message: 'message published'}))
            .catch(error => res.status(400).json({error}))
        }
    )

    
    
}

exports.getAllMessage = (req,res,next)=> {
    console.log('get all messages')
    Message.find()
        .then(messages => res.status(200).json(messages))
        .catch(error => res.status(400).json({error}));
}
