let temp = document.getElementById('temp');
let speed = document.getElementById('wind-speed');
let windCalc = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * (temp * speed ** 0.16));

document.getElementById('wind-chill').textContent = windCalc;