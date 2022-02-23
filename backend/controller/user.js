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

exports.getUserId = (req,res,next)=>{
    console.log('get user id')
    User.findOne({_id:req.params.id})
        .then(user=> res.status(200).json(user))
        .catch(error => res.status(400).json({error}))
}

exports.getAllUser = (req,res,next)=> {
    console.log('get all users')
    User.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({error}));
}


exports.putUser = (req,res,next)=>{
    console.log('up user')
    User.updateOne({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
        .then(user=> res.status(200).json(user))
        .catch(error => res.status(400).json({error}))
}

exports.deleteUser = (req,res,next)=>{
    console.log('deleted user')
    user.deleteOne({_id:req.params.id})
        .then(user=> res.status(200).json(user))
        .catch(error => res.status(400).json({error}))
}