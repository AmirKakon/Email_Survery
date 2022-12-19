const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//fetching the users model
const User = mongoose.model('users');

passport.serializeUser((user, done) => 
    {   
        done(null, user.id);
    }
);

passport.deserializeUser((id, done) => 
    {
        User.findById(id)
        .then(user => 
            { 
                done(null, user)
            }
        );
    }
);

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, 
        (accessToken, refreshToken, profile, done) => 
            {
                //checks if user exists in DB.
                User.findOne({googleId: profile.id})
                .then((existingUser) => 
                    {
                        if(!existingUser) {
                            //create an instance (record) and saves it in the database. Once user is created then func is done
                            new User({googleId: profile.id}).save()
                            .then(user => done(null, user));
                            
                        }
                        else{
                            //user already exists. no need to wait and done.
                            done(null, existingUser);
                        }
                    }
                );
            }
    )
);