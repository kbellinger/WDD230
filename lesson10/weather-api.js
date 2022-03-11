const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=99702,us&units=imperial&appid=c738b427fed527621c17a285cda00f35';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(0);
    
    const icon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;

    desc = desc.split(' ').map(capitalize).join(' ');

    document.querySelector('#icon-src').textContent = icon;
    document.querySelector('#weather-icon').setAttribute('src', icon);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};