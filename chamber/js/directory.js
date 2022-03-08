const requestURL = 'https://kbellinger.github.io/wdd230/chamber/data/businesses.json';
const cards = document.querySelector('.cards');

function displayBusinessCards(business) {
    // creating elements for the cards
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let busName = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('a');
    
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo for ${business.name}.`);

    // assigning data to elements within cards
    busName.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    web.textContent = `${business.website}`;

    card.appendChild(logo);
    card.appendChild(busName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);

    cards.appendChild(card);

};

// toggle list view
function listView () {
    document.getElementById('list').classList.toggle('')
}

fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinessCards);
});