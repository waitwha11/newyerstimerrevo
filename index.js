function timer(){
let achieveDate = new Date (2024,0,1,0,0,0,0)
let nowDate = new Date()
let result = (achieveDate - nowDate)
if (result < 0) {
    let elmnt = document.getElementById('timer');
    elmnt.innerHTML = ' - : - - : - - : - - ';
    return undefined;
}
let seconds = Math.floor((result/1000)%60)
let minutes = Math.floor((result/1000/60)%60)
let hours = Math.floor((result/1000/60/60)%24)
let days = Math.floor((result/1000/60/60/24))
if (seconds < 10) {seconds = '0' + seconds}
if (minutes < 10) {minutes = '0' + minutes}
if (hours < 10) {hours = '0' + hours}
let elmnt = document.getElementById('timer')
elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds
setTimeout(timer,1000)
}

window.onload = function() {
    timer()
}