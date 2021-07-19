const http = require('http');

const accessToken = '4d175ee162d81b6de047c4171f8a3e23';
const query = 'New York';
const url = `http://api.weatherstack.com/current?access_key=${accessToken}&query=${query}`;

const req = http.request(url, (response) => {
    let data = '';

    response.on('data', chunck => {
        data += chunck.toString();
    });

    response.on('end', () => {
        const parsedResponse = JSON.parse(data);
        console.log(parsedResponse);
    });
});

req.on('error', error => {
    console.log(error);
});

req.end();