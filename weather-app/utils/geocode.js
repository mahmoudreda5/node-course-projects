const request = require('request');

// request - mapbox - geocoding
const geocode = (query, callback) => {
    const accessToken = 'pk.eyJ1IjoibWFobW91ZHJlZGE3IiwiYSI6ImNrcjd0emozYTNjMnUyb254MG92NWJ0NmcifQ.uWIJ0r0aNHbUs3vqRfq1cQ';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${accessToken}&limit=1`;
    request({
        url: url,
        json: true
    }, (error, response) => {
        let err = undefined, data = undefined;
        if(error) {
            err = 'unable to connect to mapbox service.';
        } else if(response.body.error || !response.body.features.length) {
            err = 'error while retrieving geocoding info.';
        } else {
            data = {
                name: response.body.features[0].place_name,
                geocode: {
                    latitude: response.body.features[0].center[0],
                    longitude: response.body.features[0].center[1]
                }
            };
        }
        callback(err, data);
    });
};

module.exports = geocode;