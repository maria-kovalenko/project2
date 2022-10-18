
//-------------------Range line-------------------------------
let range = document.querySelector('.range');
let thumb = range.querySelector('.thumb');
let rangeLine = range.querySelector('.range__line');
let pointElem = range.querySelectorAll('.range__item')
let shiftX
let next

function onPointerDownMarker(event) {
  event.preventDefault();
  thumb.classList.remove('transitionLeft')
  rangeLine.classList.remove('transitionWidth')
  shiftX = event.clientX - thumb.getBoundingClientRect().left;
  thumb.addEventListener("pointermove", onPointerMoveMarker)
  thumb.addEventListener("pointerup", onPointerUpMarker)
  thumb.setPointerCapture(event.pointerId);
}

function onPointerMoveMarker(event) {
  event.preventDefault();
  let newLeft = event.clientX - shiftX - range.getBoundingClientRect().left;
  if (newLeft < 0) {  newLeft = 0; }
  if (newLeft > 249) { newLeft = 249; }
  next = newLeft

  lineColor(newLeft)
}
function onPointerUpMarker(event) {
  event.preventDefault();
  thumb.classList.add('transitionLeft')
  rangeLine.classList.add('transitionWidth')
  pointElem.forEach(el => {
    let diff = next - el.offsetLeft
    if(el.offsetLeft <= next && diff <= 41) {
      lineColor(el.offsetLeft)
    }
    if(el.offsetLeft > next && diff >= -41) {
      lineColor(el.offsetLeft)
    }
  })
  thumb.removeEventListener("pointermove", onPointerMoveMarker)
}

function onPointerUpBreakpoint(event) {
  event.preventDefault();
  let point = event.target.offsetLeft
  lineColor(point);
}

function lineColor(point){
  rangeLine.style.width = point + 'px';
  thumb.style.left = point - 3 + 'px';
  pointElem.forEach(el => {
    if(el.offsetLeft <= point) {
      el.style.background = "#c70122";
    }
    if(el.offsetLeft > point) {
      el.style.background = "#f3f3f3";
    }
  })
}
pointElem.forEach((el, i)=>{
  el.addEventListener("pointerup", onPointerUpBreakpoint)
});
thumb.addEventListener("pointerdown", onPointerDownMarker)
thumb.ondragstart = () => false