function getCurrentWeather() {
  let temperature = document.getElementById("temperature");
  let location = document.getElementById("location");
  let description = document.getElementById("description");
  let key = "c48ec3da67fbc0fb1696fb4259c36252";
  let api = "https://api.openweathermap.org/data/2.5/weather";

  location.innerHTML = "Searching...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      key +
      "&units=metric";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let currentTemperature = data.main.temp;
        temperature.innerHTML = currentTemperature + "° C";
        location.innerHTML =
          data.name + "<br><b> (" + latitude + "°, " + longitude + "°)</b>";
        description.innerHTML = data.weather[0].main;
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your current location";
  }
}

getCurrentWeather();