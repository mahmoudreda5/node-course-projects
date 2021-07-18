const request = require('request');

// request - weatherstack
const accessToken = '4d175ee162d81b6de047c4171f8a3e23';
const query = '34.0544,-118.2439';
const url = `http://api.weatherstack.com/current?access_key=${accessToken}&query=${query}`;

request({
    url: url,
    json: true
}, (error, response) => {
    if(error) {
        console.log('unable to connect to weather service.');
    } else if(response.body.error) {
        console.log(response.body.error.info);
    } else {
        console.log(response.body.current.temperature);
    }
});

// //request - mapbox - geocoding
// const accessToken = 'pk.eyJ1IjoibWFobW91ZHJlZGE3IiwiYSI6ImNrcjd0emozYTNjMnUyb254MG92NWJ0NmcifQ.uWIJ0r0aNHbUs3vqRfq1cQ';
// const query = 'New York';
// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}&limit=1`;

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     if(error) {
//         console.log('unable to connect to mapbox service.');
//     } else if(response.body.error || !response.body.features.length) {
//         console.log('error while retrieving geocoding info.');
//     } else {
//         console.log(response.body.features[0].place_name);
//         console.log(response.body.features[0].center[0]);
//         console.log(response.body.features[0].center[1]);
//     }
// });