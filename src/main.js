import "@styles/main.scss";

// timer
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

  let min = document.getElementById("min");
  min.innerHTML = mins;

  let sec = document.getElementById("sec");
  sec.innerHTML = secs;
}

function start_timer() {
  intr = setInterval(tick, 1000);
}

start_timer();

// input range
var sheet = document.createElement("style"),
  $rangeInput = $(".range input"),
  prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
    val = (curVal - 1) * 32.666666667,
    style = "";

  // Set active label
  $(".range-labels li").removeClass("active selected");

  var curLabel = $(".range-labels").find("li:nth-child(" + curVal + ")");

  curLabel.addClass("active selected");
  curLabel.prevAll().addClass("selected");

  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style +=
      ".range {background: linear-gradient(to right, #C70122 0%, #C70122 " +
      val +
      "%, #fff " +
      val +
      "%, #fff 100%)}";
    style +=
      ".range input::-" +
      prefs[i] +
      "{background: linear-gradient(to right, #C70122 0%, #C70122 " +
      val +
      "%, #f3f3f3 " +
      val +
      "%, #f3f3f3 100%)}";
  }

  return style;
};

$rangeInput.on("input", function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$(".range-labels li").on("click", function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger("input");
});
