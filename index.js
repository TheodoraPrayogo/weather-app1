//Challenge 1 : Get the current day
let now = new Date();

let currentDay = document.querySelector("li#day");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

currentDay.innerHTML = `${day}`;

//Get the current time
let currentTime = document.querySelector("li#time");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentTime.innerHTML = `${hours}:${minutes}`;

//Get the current date

let currentDate = document.querySelector("#date");
let dd = now.getDate();
let mm = now.getMonth() + 1;
let yyyy = now.getFullYear();
currentDate.innerHTML = `${dd}/${mm}/${yyyy}`;

//why my currentdate is not working???

//Add a search engine,
//when searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.
function displayWeatherCondition(response) {
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function search(event) {
  event.preventDefault();
  let.city = document.querySelector("#city-input").value;
  searchCity(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

// Current button

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.logitude;
  console.log(lat);
  console.log(long);
}

navigator.geolocation.getCurrentPosition(showPosition);
