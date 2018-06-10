var express = require('express')
var cors = require('cors')
var bodyParser = require('body-Parser')
var mongoose = require('mongoose')
var app = express()
mongoose.Promise = Promise

var User = require('./models/User.js')
var auth = require('./auth.js')
var Post = require('./models/Post.js')

app.use(cors())
app.use(bodyParser.json())



app.get('/posts/:id', async (req, res) => {
    var author  = req.params.id
    var posts = await (Post.find({author}))
    res.send(posts)
})

app.post('/post', (req, res) => {
    var postData = req.body
    postData.author = '5b1d2f5d3a2f93036c3337e2'

    var post = new Post(postData)

    console.log(post)
    post.save((err, result) => {
        if(!err) {
            console.log("saved Post Data")
            res.sendStatus(200)
        } else if(err) {
            console.error('Saving Post Error');
            return res.status(500).send({message: 'Saving post Error'});
        }
    })
})

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v');     
        res.send(users)
    } catch(error) {
        console.log(error);
        res.send(500)
    }
})

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v -_id');     
        res.send(user)
        console.log(user)
    } catch(error) {
        console.log(error);
        res.send(500)
    }
})

mongoose.connect('mongodb://test:test123@ds151970.mlab.com:51970/pssocial', (err) => {
    if(!err) {
        console.log("Connected to Mongo");
    } else if(err) {
        console.log("Error"+err);
    }
})
app.use('/auth', auth)
app.listen(3000)