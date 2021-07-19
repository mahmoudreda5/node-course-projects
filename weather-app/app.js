const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if(process.argv.length > 2) {
    geocode(process.argv[2], (error, { name, geocode: { latitude, longitude } = {} } = {}) => {
        if(error) {
            return console.log(error);
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log(`temp in ${name} is ${forecastData}`);
        });
    });
} else {
    console.log('enter a city name.');
}