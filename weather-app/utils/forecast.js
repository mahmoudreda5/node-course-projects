const request = require('request');

// request - weatherstack
const forecast = (latitude, longitude, callback) => {
    const accessToken = '4d175ee162d81b6de047c4171f8a3e23';
    const query = `${latitude},${longitude}`;
    const url = `http://api.weatherstack.com/current?access_key=${accessToken}&query=${query}`;
    
    request({
        url,
        json: true
    }, (error, { body } = {}) => {
        let err = undefined, data = undefined;
        if(error) {
            err = 'unable to connect to weather service.';
        } else if(body.error) {
            err = body.error.info;
        } else {
            data = body.current.temperature;
        }
        callback(err, data);
    });
}

module.exports = forecast;