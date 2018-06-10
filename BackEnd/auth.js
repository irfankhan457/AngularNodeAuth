var User = require('./models/User.js')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

router.post('/register', (req, res) => {
    var userData = req.body;
    var user = new User(userData);
    user.save((err, result) => {
        if(!err) {
            console.log("saved User Data")
            res.sendStatus(200)
        } else if(err) {
            console.log('Error'+err);
        }
    })
})

router.post('/login', async (req, res) => {
        var loginData = req.body;     
        var user = await User.findOne({email: loginData.email}); 
        if(!user) {
            res.sendStatus(401).send({message: 'Email or Password Invalid'})
        }   
        bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
            if(!isMatch) {
                return res.sendStatus(401).send({message: 'Email or Password Invalid'})
            }
            var payload = {}
            var token = jwt.encode(payload, '123')
            console.log(token);
            res.status(200).send({token})
        })
    })

    module.exports = router;