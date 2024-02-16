let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

// Change city heading
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  let apiKey = "0a140ebb07f1ea6t77816o3e4ffa1319";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

// Get current date and time
function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[day]} ${hours}:${minutes}`;
}

// Get city weather
// function showWeather() {
//   let city = searchInput.value.toLowerCase();
//   if (weather[city] !== undefined) {
//     let temperature = weather[city].temp;
//     let celsiusTemperature = Math.round(temperature);
//     let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
//     let humidity = weather[city].humidity;
//     alert(
//       `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${searchInput.value} with a humidity of ${humidity}%`
//     );
//   } else {
//     if (weather[city] == undefined) {
//       alert(
//         `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
//       );
//     }
//   }
// }

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
// searchForm.addEventListener("submit", showWeather);
