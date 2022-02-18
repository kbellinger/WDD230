let temp = document.getElementById('temp').textContent;
let speed = document.getElementById('wind-speed').textContent;
let windCalc = 35.74 + (0.6215 * temp) - 35.75 *  Math.pow(speed, 0.16)  + 0.4275 * (temp * Math.pow(speed, 0.16));

// console.log(windCalc)
document.getElementById('wind-chill').textContent = windCalc.toFixed(0);