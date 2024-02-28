const request = require("request");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=37.2793607&lon=49.5846102&appid=3db603f4461ea7190804a28ea42deef4&units=metric";

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  const cTemp = data.main.temp;
  const feelsTemp = data.main.feels_like;
  console.log(`Location: ${data.name}-${data.sys.country}`);
  console.log(
    `Curent temp is ${cTemp}°C feels like ${feelsTemp}°C`
  );
});
