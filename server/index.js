const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
    cookieSession(
        {
            maxAge: 30 * 24 * 60 *60 * 1000, //milliseconds
            keys: [keys.cookieKey]
        }
    )
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production')
{
    //we will look into the production assets located in client/build/static/js/main.js file
    app.use(express.static('client/build'));

    //if we dont understand the route (does not exist in production assets) we will handle it on the react client side.
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// default port is 5000 (for development purposes)
const PORT = process.env.PORT || 5000;
app.listen(PORT);