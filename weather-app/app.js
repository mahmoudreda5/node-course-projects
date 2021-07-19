const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (error, data) => {
    if(error) {
        console.log(error);
    } else {
        forecast(data.geocode.longitude, data.geocode.latitude, (error, data) => {
            if(error) {
                console.log(error);
            } else {
                console.log(`temp now is ${data}`);
            }
        });
    }
});