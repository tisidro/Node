const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<p>The Home Page</p>');
});

app.get('/about', (req, res) => {
    res.send('<p>About Page</p>');
});