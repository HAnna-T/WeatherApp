"use strict";

searchButton.addEventListener("click", searchWeather);
function searchWeather() {
  loadingText.style.display = "block";
  weatherBox.style.display = "none";
  const cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    return console.log("please enter city name");
  }
  const http = new XMLHttpRequest();
  const apiKey = "bf00a79e06d399abf3885f354e655500";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric&appid=" +
    apiKey;
  const method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
      const data = JSON.parse(http.responseText);
      const weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase()
      );
      weatherData.temperature = data.main.temp;
      updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE) {
      console.log("Something went wrong!");
    }
  };
  http.send();
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  loadingText.style.display = "none";
  weatherBox.style.display = "block";
}
