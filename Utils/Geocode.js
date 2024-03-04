const request = require('request');

//Using asynchronous programming for fetch coordinate of specify city

const geocode = (address, callback) => {
    const url =
      "http://api.openweathermap.org/geo/1.0/direct?q=" + 
      encodeURIComponent(address) + 
      "&appid=3db603f4461ea7190804a28ea42deef4";
  
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Check your internet connection!", undefined);
      } else if (response.body.message) {
        callback("Unable to find location. Try another search!", undefined);
      } else {
        callback(undefined, {
            cityName: response.body[0].name,
            latitude: response.body[0].lat,
            longitude: response.body[0].lon,
          });
      }
    });
  };
  
module.exports = geocode;