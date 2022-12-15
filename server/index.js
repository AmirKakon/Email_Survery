const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there' });
});

// default port is 5000 (for development purposes)
const PORT = process.env.PORT || 5000;
app.listen(PORT);