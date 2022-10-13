import "@styles/main.scss";

// -------------------timer-------------------------------
let time = 180;
let intr;
function tick() {
  time = time - 1;
  let mins = Math.floor(time / 60);
  let secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  mins = mins >= 10 ? mins : "0" + mins;

  let min = document.getElementById("min");
  min.innerHTML = mins;

  let sec = document.getElementById("sec");
  sec.innerHTML = secs;
}

function start_timer() {
  intr = setInterval(tick, 1000);
}

start_timer();
