const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// default port is 5000 (for development purposes)
const PORT = process.env.PORT || 5000;
app.listen(PORT);