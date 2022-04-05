function closeAlert(){
    document.getElementById('weather-banner').classList.addClass('close');
    document.getElementById('closebtn').classList.addClass('close');
}
const xBtn = document.getElementById('closebtn');
xBtn.onclick = closeAlert;