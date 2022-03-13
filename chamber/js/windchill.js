const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=74070,us&units=imperial&appid=c738b427fed527621c17a285cda00f35';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(0);
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed.toFixed(0);
    
    const icon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');

    document.querySelector('.weather-icon').setAttribute('src', icon);
    document.querySelector('.weather-icon').setAttribute('alt', desc);
    document.querySelector('#condition').textContent = desc;
  });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};



let temp = document.getElementById('temp').textContent;
let speed = document.getElementById('wind-speed').textContent;
let windCalc = '';

// console.log(windCalc)
if (temp <= 50 && speed > 3){
    windCalc = 35.74 + (0.6215 * temp) - 35.75 *  Math.pow(speed, 0.16)  + 0.4275 * (temp * Math.pow(speed, 0.16));
} else {
    windCalc = 'N/A';
};

document.getElementById('wind-chill').textContent = windCalc;
