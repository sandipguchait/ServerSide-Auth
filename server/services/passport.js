const passport = require('passport');
const User = require('../models/User');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//SETUP OPTIONS FOR JWT STRATEGY
const jwtOptions = {};

//CREATE JWT STRATEGY
const jwtLogin = new JwtStrategy( jwtOptions, (payload, done) => {
    //See if user Id in thepayload is on our databse 
    // If it does call 'done' with that user
    // Otherwise, call done without a user object

    User.findById(payload.sub, (err, user) => {
        if(err) return done(err, false);
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});