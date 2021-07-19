const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if(process.argv.length > 2) {
    geocode(process.argv[2], (error, geocodeData) => {
        if(error) {
            return console.log(error);
        }
        forecast(geocodeData.geocode.longitude, geocodeData.geocode.latitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log(`temp in ${geocodeData.name} is ${forecastData}`);
        });
    });
} else {
    console.log('enter a city name.');
}