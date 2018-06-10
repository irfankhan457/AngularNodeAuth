var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    email : String,
    pwd : String,
    name : String,
    description : String
})


userSchema.pre('save', function(next)  {
     var user = this

     if(!user.isModified('pwd')) {
         return next();
     }

     bcrypt.hash(user.pwd, null, null, (err, hash) => {
         if(err) {
             return next(err);
         }
         //console.log(hash);
         user.pwd = hash;
         // next means it will call save method to save data into db mongoDB
         next();
     })
})

module.exports = mongoose.model('user',  userSchema)