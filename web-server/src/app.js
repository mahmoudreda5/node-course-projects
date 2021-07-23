const path = require('path');
const express = require('express');
const app = express();

// define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const templatesDirPath = path.join(__dirname, 'templates');

// setup handlebars config
app.set('view engine', 'hbs');
app.set('views', templatesDirPath);

// setup static dir to serve
app.use(express.static(publicDirPath));


app.get('', (req, res) => {
    return res.render('index', {
        title: 'weather app',
        name: 'mahmoud reda'
    });
});

app.get('/about', (req, res) => {
    return res.render('about', {
        title: 'about me'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help message'
    });
});

app.get('/weather', (req, res) => {
    return res.send('show weather');
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});