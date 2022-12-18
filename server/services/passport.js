const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//fetching the users model
const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            //create an instance (record) and saves it in the database.
            new User({googleId: profile.id}).save();
        }
    )
);