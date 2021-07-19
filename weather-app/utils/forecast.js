const request = require('request');

// request - weatherstack
const forecast = (latitude, longitude, callback) => {
    const accessToken = '4d175ee162d81b6de047c4171f8a3e23';
    const query = `${latitude},${longitude}`;
    const url = `http://api.weatherstack.com/current?access_key=${accessToken}&query=${query}`;
    
    request({
        url: url,
        json: true
    }, (error, response) => {
        let err = undefined, data = undefined;
        if(error) {
            err = 'unable to connect to weather service.';
        } else if(response.body.error) {
            err = response.body.error.info;
        } else {
            data = response.body.current.temperature;
        }
        callback(err, data);
    });
}

module.exports = forecast;