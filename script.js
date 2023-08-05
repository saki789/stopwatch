let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById('startStop').textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  document.getElementById('display').textContent = formatTime();
  document.getElementById('startStop').textContent = 'Start';
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('display').textContent = formatTime();
}

function formatTime() {
  return (
    (hours < 10 ? '0' : '') + hours + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds
  );
}
