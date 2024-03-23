const geocode = require("./Utils/Geocode");
const forecast = require("./Utils/Forecast");


// console.log(process.argv[2])

const address = process.argv[2]


geocode(address, (error, geocode) => {
  if (error) {
    return console.log(error);
  }
  forecast(geocode.latitude, geocode.longitude, (error, forecast) => {
    if (error) {
      return error;
    }
    console.log(geocode.cityName);
    console.log(forecast);
  });
});
