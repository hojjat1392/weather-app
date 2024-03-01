const request = require("request");
const chalk = require("chalk");

const rashtReq =
  "https://api.openweathermap.org/data/2.5/weather?lat=37.2793607&lon=49.5846102&appid=3db603f4461ea7190804a28ea42deef4&units=metric";

request({ url: rashtReq, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.blue.inverse("Check your internet connection!"));
  } else if (response.body.message) {
    console.log(chalk.red.inverse(response.body.message));
  } else {
    const data = response.body;
    const cTemp = data.main.temp;
    const feelsTemp = data.main.feels_like;
    console.log(`Location: ${data.name}-${data.sys.country}`);
    console.log(`Curent temp is ${cTemp}°C feels like ${feelsTemp}°C`);
  }
});

//challange req
const challReq =
  "http://api.openweathermap.org/geo/1.0/direct?q=Rasht&appid=3db603f4461ea7190804a28ea42deef4";

request({ url: challReq, json: true }, (error, response) => {
  if (error) {
    //internet connection error
    console.log(chalk.blue.inverse("Check your internet connection!"));
    //error handeling from API response
  } else if (response.body.message) {
    console.log(chalk.red.inverse(response.body.message));
  } else {
    const result = response.body[0];
    console.log(`The City name is ${result.name}`);
    console.log(`The Coordinate lat: ${result.lat} long: ${result.lon}`);
  }
});
