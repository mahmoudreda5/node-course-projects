const express = require('express');
const app = express();

app.get('', (req, res) => {
    return res.send('hello express');
});

app.get('/help', (req, res) => {
    return res.send('Help page');
});

app.get('/about', (req, res) => {
    return res.send('about page');
});

app.get('/weather', (req, res) => {
    return res.send('show weather');
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});