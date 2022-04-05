const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=84095,us&units=imperial&appid=c738b427fed527621c17a285cda00f35';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#cur-temp').textContent = jsObject.main.temp.toFixed(0);
    document.querySelector('#cur-humidity').textContent = jsObject.main.humidity.toFixed(0);
    

    const curIcon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    desc = desc.split(' ').map(capitalize).join(' ');

    const tomIcon = `https://openweathermap.org/img/w/01d.png`;
    const day3Icon = `https://openweathermap.org/img/w/02d.png`

    document.querySelector('#cur-weather-icon').setAttribute('src', curIcon);
    document.querySelector('#cur-weather-icon').setAttribute('alt', desc);
    document.querySelector('#cur-condition').textContent = desc;
 
    document.querySelector('#tom-weather-icon').setAttribute('src', tomIcon);
    document.querySelector('#day2-weather-icon').setAttribute('src', tomIcon);
    document.querySelector('#day3-weather-icon').setAttribute('src',day3Icon);
});

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};





