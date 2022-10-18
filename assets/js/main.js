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
