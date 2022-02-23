const express = require('express');
const mongoose = require('mongoose')
const app = express();
const postRoutes = require('./route/post')

mongoose.connect('mongodb+srv://Zilba:test@cluster0.l9tw0.mongodb.net/msgNode?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("db valid"))
.catch(()=> console.log("db error"))

app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.use('/delete', postRoutes)

app.use('/put', postRoutes)

app.use('/post', postRoutes)

app.use((req, res) => {
    res.json({message: 'ton serveur marche, c est pas mal'});
});

module.exports = app;


