let seconds = document.getElementById('seconds');

let minutes = document.getElementById('minutes');

let soundAlert = document.getElementById('sound');

let display = document.getElementById('display');

let startBtn = document.getElementById('start');

let stopBtn = document.getElementById('stop');

let stopWatchSec;

let currentMinute;

let currentSeconds;

let interval;

const setMinutes = () => {
  for (let index = 0; index <= 60; index += 1) {
    minutes.innerHTML += '<option value="' + index + '">' + index + '</option>';
  };
};

const setSeconds = () => {
  for (let index = 1; index <= 60; index += 1) {
    seconds.innerHTML += `<option value="${index}">${index}</option>`;
  };
};

const startStopWatch = () => {
  currentMinute = minutes.value;
  currentSeconds = seconds.value;

  display.childNodes[1].innerHTML = `${currentMinute}: ${currentSeconds}`;

  interval = setInterval(function () {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      if (currentMinute > 0) {
        currentMinute -= 1;
        currentSeconds = 59;
      } else {
        document.getElementById('sound').play();
        clearInterval(interval);
      }
    }

    display.childNodes[1].innerHTML = `${currentMinute}: ${currentSeconds}`;

    minutes.value = 0;
    seconds.value = 1;

  }, 1000)
};

const stopStopWatch = () => {
  location.reload()
};

startBtn.addEventListener('click', startStopWatch);

stopBtn.addEventListener('click', stopStopWatch);

setMinutes();
setSeconds();