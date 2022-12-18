const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// default port is 5000 (for development purposes)
const PORT = process.env.PORT || 5000;
app.listen(PORT);