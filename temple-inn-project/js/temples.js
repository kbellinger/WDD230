const requestURL = 'https://kbellinger.github.io/wdd230/temple-inn-project/data/temple-list.json';
const cards = document.querySelector('#temple-cards');

function displayTemples(temple){
    let card = document.createElement('section');
    let photo = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let info = document.createElement('section');
    let serviceH = document.createElement('h4')
    let service = document.createElement('p');
    let historyH = document.createElement('h4')
    let history = document.createElement('p');
    let schedule = document.createElement('a');
    let schedulebtn = document.createElement('button');
    let closings = document.createElement('h4');
    let closure = document.createElement('p');


    photo.setAttribute('src', temple.image);
    photo.setAttribute('alt', `Photo of ${temple.name}.`)

    card.setAttribute('id', 'card');

    info.setAttribute('id', 'info');

    schedule.setAttribute('href', temple.schedule);
    schedule.setAttribute('target', 'blank');

    schedulebtn.setAttribute('class', 'sched-btn')

    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    email.textContent = `${temple.email}`;
    schedulebtn.textContent = `Schedule`
    // dropdownbtn.textContent = `More Info`
    serviceH.textContent = `Services`;
    service.textContent = `${temple.services}`;
    historyH.textContent = `History`;
    history.textContent = `${temple.history}`;
    closings.textContent = `Closings`;
    closure.textContent = `${temple.closure}`;



    schedule.appendChild(schedulebtn);

    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(schedule);

    info.appendChild(serviceH);
    info.appendChild(service);
    info.appendChild(historyH);
    info.appendChild(history);
    info.appendChild(closings);
    info.appendChild(closure);

    card.appendChild(info)

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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function infoFlip() {

}

function draperDrop() {
    document.querySelector('.info-draper').classList.toggle("show");
    document.querySelector('dropbtn').classList.toggle('show');
  }

function jrDrop() {
    document.querySelector('.info-jr').classList.toggle("show");
    document.querySelector('dropbtn').classList.toggle('show');
}

function omDrop() {
    document.querySelector('.info-om').classList.toggle("show");
    document.querySelector('dropbtn').classList.toggle('show');
}

function slcDrop() {
    document.querySelector('.info-slc').classList.toggle("show");
    document.querySelector('dropbtn').classList.toggle('show');
}
  
//   Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('more-info');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }