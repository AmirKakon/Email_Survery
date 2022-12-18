const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
}), (accessToken) => {
    console.log(accessToken);
}
);

// default port is 5000 (for development purposes)
const PORT = process.env.PORT || 5000;
app.listen(PORT);