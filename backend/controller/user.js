const User = require('../models/user')

exports.createUser = (req,res,next)=> {
    console.log('user test')
    
    const u = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    u.save()
    .then(()=> res.status(200).json({message: 'ok'}))
    .catch(error => res.status(400).json({error}))
}