//-------------------Range line-------------------------------
let range = document.querySelector('.range');
let thumb = range.querySelector('.thumb');
let rangeLine = range.querySelector('.range__line');

let breakpoints = []
let pointElem = range.querySelectorAll('.range__item')
pointElem.forEach((el, i)=>{
  breakpoints.push(el.offsetLeft - 2)
});
let current = 82
let shiftX
let next

function onPointerDown(event) {
  event.preventDefault();
  shiftX = event.clientX - thumb.getBoundingClientRect().left;
  thumb.addEventListener("pointerup", onPointerUp)
  thumb.addEventListener("pointermove", onPointerMove)
  thumb.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  event.preventDefault();
  let newLeft = event.clientX - shiftX - range.getBoundingClientRect().left;
  if (newLeft < 0) {
    newLeft = 0;
  }
  let rightEdge = range.offsetWidth - thumb.offsetWidth;
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }
  let move = newLeft - current
  if( move < 0 && newLeft < current) {
    next = breakpoints.filter(el => {return el < newLeft})
    next = Math.max(...next);
  }
  if(move > 0 && newLeft > current) {
    next = breakpoints.filter(el => {return el > newLeft})
    next = Math.min(...next);
  }
  rangeLine.style.width = newLeft + 'px';
}

function onPointerUp(event) {
  event.preventDefault();
  current = next
  rangeLine.style.width = current + 'px';
  thumb.removeEventListener("pointermove", onPointerMove)
  thumb.removeEventListener("pointermove", onPointerMove)


  pointElem[breakpoints.indexOf(current)].style.background = "#c70122";
}
thumb.addEventListener("pointerdown", onPointerDown)
thumb.ondragstart = () => false