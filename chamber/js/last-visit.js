const lastVisit = window.localStorage.getItem('last-visit');

if(lastVisit == null){
    document.querySelector('.last-visit').textContent = 'This is your first visit!';
} else{
    const factor =  1000 * 60 * 60 * 24;

    let daysBetween = Date.now() - lastVisit;

    let numberOfDays = daysBetween / factor;
    console.log(daysBetween);
    document.querySelector('.last-visit').textContent = `${numberOfDays.toFixed(0)} days since last visit.`;
}

localStorage.setItem('last-visit', Date.now());