const requestURL = 'https://kbellinger.github.io/wdd230/temple-inn-project/data/temple-list.json';
const cards = document.querySelector('#temple-cards');

function displayTemples(temple){
    let card = document.createElement('section');
    let photo = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    // let service = document.createElement('p');
    // let history = document.createElement('p');
    // let schedule = document.createElement('a');
    // let closure = document.createElement('p');


    photo.setAttribute('src', temple.image);
    photo.setAttribute('alt', `Photo of ${temple.name}.`)

    // schedule.setAttribute('href', temple.schedule);
    // schedule.setAttribute('target', 'blank');

    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    // service.textContent = `${temple.services}`;
    // history.textContent = `${temple.history}`;
    // closure.textContent = `${temple.closure}`;

    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    // card.appendChild(service);
    // card.appendChild(history);
    // card.appendChild(closure);
    // card.appendChild(schedule);

    cards.appendChild(card)


}

// fetching json file
fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});