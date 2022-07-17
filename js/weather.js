const apiKey = "61f5edc32cada65f61451b08ffd47e05"
const weather = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather img");
const tempForm = document.querySelector(".temp .numb");
const locateForm = document.querySelector(".location .city");

let api;

function onGeoSuccess(position) {
  const {latitude, longitude} = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
  fetch(api).then((res) => res.json()).then((result) => {
    weatherDetail(result)
  })
}

function weatherDetail(info) {
    const city = info.name;
    const id = info.weather[0].id;
    const temp = info.main.temp;

    if(id == 800) {
      weatherIcon.src = "./img/clear.svg"
    } else if(id >= 200 && id <= 232) {
      weatherIcon.src = "./img/storm.svg"
    } else if(id >= 600 && id <= 622) {
      weatherIcon.src = "./img/snow.svg"
    } else if(id >= 701 && id <= 781) {
      weatherIcon.src = "./img/haze.svg"
    } else if(id >= 801 && id <= 804) {
      weatherIcon.src = "./img/cloud.svg"
    } else if((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
      weatherIcon.src = "./img/rain.svg"
    }

    locateForm.innerText = city;
    tempForm.innerText = temp.toFixed(1);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess);
