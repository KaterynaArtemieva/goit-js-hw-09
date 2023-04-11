const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let id = null;

btnStop.setAttribute("disabled", "disabled");

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick () {
id = setInterval(()=> {
body.style.backgroundColor=getRandomHexColor();
btnStart.setAttribute("disabled", "disabled");
btnStop.removeAttribute("disabled")
}, 1000);
}

function onBtnStopClick () {
clearInterval(id);
btnStart.removeAttribute("disabled");
btnStop.setAttribute("disabled", "disabled");
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }