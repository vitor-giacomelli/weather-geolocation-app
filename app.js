function getCurrentWeather() {
  let temperature = document.getElementById("temperature");
  let location = document.getElementById("location");
  let description = document.getElementById("description");
  let key = "c48ec3da67fbc0fb1696fb4259c36252";
  let api = "https://api.openweathermap.org/data/2.5/weather";

  location.innerHTML = "Searching...";

  navigator.geolocation.getCurrentPosition(success, error);


  function success (currentPosition) {
    latitude = currentPosition.coords.latitude;
    longitude = currentPosition.coords.longitude;
    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      key +
      "&units=metric";

      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          
          console.log(response);
          let currentTemperature = response.main.temp;
          temperature.innerHTML = currentTemperature + "° C";
          location.innerHTML =
          response.name + "<br><b> (" + latitude + "°, " + longitude + "°)</b>";
          description.innerHTML = response.weather[0].main;
            
        },
        error: function (error)
        {
          alert(error)
        }

      })
  }
  function error() {
    location.innerHTML = "Unable to retrieve your current location";
  }
}

getCurrentWeather();