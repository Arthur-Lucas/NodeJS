const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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


exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
    (user) => {
        console.log("1")
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      console.log(req.body.password)
      console.log(user.password)
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
            console.log("3")
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!')
            });
          }
          console.log("4")
          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });
          res.status(200).json({
            userId: user._id,
            username: user.username,
            email: user.email,
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
}