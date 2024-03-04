
const geocode = require("./Utils/Geocode");
const forecast = require("./Utils/Forecast");

geocode("rasht", (error, result) => {
  console.log("Request:", result);
  console.log("Error:", error);
});

forecast(37.2793607, 49.5846102, (error, response) => {
  console.log("Request:", response);
  console.log("Error:", error);
});
