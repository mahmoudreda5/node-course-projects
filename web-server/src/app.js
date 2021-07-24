const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000;

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
    return res.render('help', {
        title: 'help message',
        name: 'mahmoud reda'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.location) {
        return res.send({
            error: 'you have to provide location!'
        });
    }
    geocode(req.query.location, (error, { name, geocode: { latitude, longitude } = {} } = {}) => {
        if(error) {
            return res.send({
                error
            });
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) {
                return res.send({
                    error
                });
            }
            return res.send({
                forecast: `temp in ${name} is ${forecastData}`,
                location: req.query.location
            });
        });
    });
});

app.get('/help/*', (req, res) => {
    return res.render('404', {
        error: 'help article not found',
        title: '404',
        name: 'mahmoud reda'
    });
});

app.get('*', (req, res) => {
    return res.render('404', {
        error: 'page not found',
        title: '404',
        name: 'mahmoud reda'
    });
});

app.listen(port, () => {
    console.log(`server is up on port ${port} ..`);
});