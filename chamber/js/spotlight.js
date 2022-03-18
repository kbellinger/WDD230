const requestURL = 'https://kbellinger.github.io/wdd230/chamber/data/businesses.json';
const spotlights = document.querySelector('#spotlights');
let spotlight1 = document.querySelector('.spotlight1');
let spotlight2 = document.querySelector('.spotlight2');
let spotligth3 = document.querySelector('.spotlight3');



// fetching json file
fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const business = jsonObject['businesses'];
   
    bus1 = business[Math.floor(Math.random() * 12)]
    bus2 = business[Math.floor(Math.random() * 12)]
    bus3 = business[Math.floor(Math.random() * 12)]

    if (bus1.status == 'silver' || bus1.status == 'gold'){
        let logo = document.querySelector('.spot-1-img');
        let busName = document.querySelector('.spot-1-business');
        let slogan = document.querySelector('.spot-1-slogan');
        let phone = document.querySelector('.spot-1-phone');
        let web = document.querySelector('.spot-1-web');

        displaySpotlight(logo, busName, slogan, phone, web, spotlight1);
    }

    if (bus2.status == 'silver' || bus2.status == 'gold' && bus2.status != bus1){
        let logo = document.querySelector('.spot-2-img');
        let busName = document.querySelector('.spot-2-business');
        let slogan = document.querySelector('.spot-2-slogan');
        let phone = document.querySelector('.spot-2-phone');
        let web = document.querySelector('.spot-2-web');

        displaySpotlight(business, logo, busName, slogan, phone, web, spotlight2);
    }

    if (bus3.status == 'silver' || bus3.status == 'gold' && bus3.status != bus2 && bus3.status != bus1){
        let logo = document.querySelector('.spot-3-img');
        let busName = document.querySelector('.spot-3-business');
        let slogan = document.querySelector('.spot-3-slogan');
        let phone = document.querySelector('.spot-3-phone');
        let web = document.querySelector('.spot-3-web');

        displaySpotlight(business, logo, busName, slogan, phone, web, spotlight2);
    }

});




function displaySpotlight (file, logo, businessName, slogan, phone, website, spotlightNum){
        logo.setAttribute('src', file.logo);
        logo.setAttribute('alt', `Logo for ${file.name}.`);

        website.setAttribute('href', file.website);
        website.setAttribute('target', 'blank');

        businessName.textContent = `${file.name}`;
        slogan.textContent = `${file.slogan}`
        phone.textContent = `${file.phone}`;
        website.textContent = `${file.website}`;

        spotlightNum.appendChild(logo);
        spotlightNum.appendChild(busName);
        spotlightNum.appendChild(slogan)
        spotlightNum.appendChild(phone);
        spotlightNum.appendChild(website);

        spotlights.appendChild(spotlightNum);

    
};