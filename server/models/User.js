const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength:6,
        trim: true
    },
});

//ENCRYPTION OF PASSWORD
userSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt ,null, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});


//COMPARING PASSWORD METHOD
userSchema.methods.comparePassword = function ( candidatePassword, callback ) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

const User = mongoose.model('User', userSchema);
module.exports = User;