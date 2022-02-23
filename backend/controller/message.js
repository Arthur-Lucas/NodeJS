const Message = require('../models/message')

exports.createMessage = (req,res,next)=> {
    console.log('message test')
    
    const u = new Message({
        test: req.body.test,
    })
    u.save()
    .then(()=> res.status(200).json({message: 'ok'}))
    .catch(error => res.status(400).json({error}))
}