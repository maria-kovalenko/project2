
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
    this.current = 0;
    this.slideLength = allCard.length - 1;
  }

  handleEvent(event) {
    if (event.currentTarget.matches("#button_next")) {
      if (this.prev == null) {
        start_timer();
      }
      return this.nextSlide();
    }
    if (event.currentTarget.matches(".header__arrow-left")) {
      return this.prevSlide();
    }
    if (event.currentTarget.matches(".header__arrow-right")) {
      if (this.prev == null) {
        start_timer();
      }
      return this.nextSlide();
    }
  }

  nextSlide() {
    // debugger
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
    // debugger
    if (this.prev !== null) {
      let hiddenSlide = allCard[this.prev];
      hiddenSlide.classList.add("hidden");
    }
    let showSlide = allCard[this.current];
    showSlide.classList.remove("hidden");
    buttonNext.dataset.slide = this.current
    this.setTextButton();
    this.scrollBar();
  }

  setTextButton() {
    if (this.current > 0 && this.current < this.slideLength) {
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
// slidCart.showSlide();
buttonNext.addEventListener("pointerup", slidCart);
arrowLeft.addEventListener("pointerup", slidCart);
arrowRight.addEventListener("pointerup", slidCart);