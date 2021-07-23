const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const templatesDirPath = path.join(__dirname, 'templates/views');
const partialsDirPath = path.join(__dirname, 'templates/partials');

// setup handlebars config
app.set('view engine', 'hbs');
app.set('views', templatesDirPath);
hbs.registerPartials(partialsDirPath);

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
        title: 'about me',
        name: 'mahmoud reda'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help message',
        name: 'mahmoud reda'
    });
});

app.get('/weather', (req, res) => {
    return res.send('show weather');
});

app.get('/help/*', (req, res) => {
    return res.render('404', {error: 'help article not found'});
});

app.get('*', (req, res) => {
    return res.render('404', {error: 'page not found'});
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});