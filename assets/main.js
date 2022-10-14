// import "@styles/main.scss";

//-------------------Checkbox Border-------------------------------

const allCheckbox = document.querySelectorAll(".card__checkbox");

function handleChecked(e) {
  let target = e.target;
  for (let elem of this.children) {
    elem.children[0].removeAttribute("checked");
    elem.classList.remove("border");
  }
  while (target != this) {
    if (target.matches(".card__checkbox-wrapper")) {
      target.children[0].setAttribute("checked", "");
      target.classList.add("border");
    }
    target = target.parentNode;
  }
}
for (let elem of allCheckbox) {
  elem.addEventListener("pointerdown", handleChecked);
}

//-------------------Slider-------------------------------
const allCard = document.querySelectorAll(".card");
const buttonNext = document.querySelector("#button_next");
const arrowLeft = document.querySelector(".header__arrow-left");
const arrowRight = document.querySelector(".header__arrow-right");
const elemPageNum = document.querySelector(".current-number");
const elemScroll = document.querySelector(".header__scrollbal");

class SlidCart {
  constructor() {
    this.prev = null;
    this.current = 1;
    this.slideLength = allCard.length;
  }

  handleEvent(event) {
    if (event.currentTarget.matches("#button_next")) {
      return this.nextSlide();
    }
    if (event.currentTarget.matches(".header__arrow-left")) {
      return this.prevSlide();
    }
    if (event.currentTarget.matches(".header__arrow-right")) {
      return this.nextSlide();
    }
  }

  nextSlide() {
    if (this.current === this.slideLength) return;
    this.prev = this.current;
    this.current++;
    this.showSlide();
  }

  prevSlide() {
    if (this.current === 1) return;
    this.prev = this.current;
    this.current--;
    this.showSlide();
  }

  showSlide() {
    let showSlide = allCard[this.current - 1];
    showSlide.classList.add("show");
    if (this.prev) {
      let hiddenSlide = allCard[this.prev - 1];
      hiddenSlide.classList.remove("show");
    }
    this.setTextButton();
    this.scrollBar();
  }

  setTextButton() {
    if (this.current === 1) {
      buttonNext.innerHTML = "Начать";
      return;
    }
    if (this.current > 1) {
      buttonNext.innerHTML = "Далее";
    }
    if (this.current === this.slideLength) {
      buttonNext.innerHTML = "Начать зарабатывать";
    }
  }

  scrollBar() {
    elemPageNum.innerHTML = `${this.current}`;
    let widthLine = Math.round(elemScroll.offsetWidth / this.slideLength);
    elemScroll.children[0].style.width = `${widthLine}px`;
    elemScroll.children[0].style.marginLeft = `${
      widthLine * (this.current - 1)
    }px`;
  }
}
let slidCart = new SlidCart();
slidCart.showSlide();
buttonNext.addEventListener("pointerdown", slidCart);
arrowLeft.addEventListener("pointerdown", slidCart);
arrowRight.addEventListener("pointerdown", slidCart);

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

  let min = document.getElementById("min");
  min.innerHTML = mins;

  let sec = document.getElementById("sec");
  sec.innerHTML = secs;
}

function start_timer() {
  intr = setInterval(tick, 1000);
}

start_timer();
