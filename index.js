let timerdisplay = document.querySelector(".timerdisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let sec = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener("click", function () {
  console.log("started");
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
  console.log("stopped");
  clearInterval(timerId);
});

resetBtn.addEventListener("click", function () {
  console.log("reset");
  clearInterval(timerId);
  timerdisplay.innerHTML = "00:00:00";
  msec = sec = mins = 0;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerdisplay.innerHTML = `${minsString} : ${secString} : ${msecString}`;
}
