//--------------------Validation and send-------------------------

const form = document.querySelector('.form')
const buttonNext = document.querySelector("#button_next");

// Добавление событиЙ отслеживания ввода символов
// buttonNext.addEventListener("pointerdown", send);
// form.querySelectorAll('.form__wrapper').forEach(el => {
//   let input = el.querySelector('input')
//   let method = 'handleEvent' + input.name[0].toUpperCase() + input.name.slice(1)
//   if (method in validation) {
//     input.oninput = function(event) {
//       validation[method](event)
//     }
//   }
// })

// Отправка данных формы и контрольная провека данных
function send() {
  if(buttonNext.dataset.slide !== '5') return
  alert('Форма отправляется!')
  // const formData = new FormData(form)
  // let valid = validation.validForm(form, formData);
  // if(valid) {
  //   setTimeout(()=>{alert('Форма отправляется!')}, 1000)
  //   // form.submit()
  // }
}
buttonNext.onpointerdown = (event) => {
  send(event);
}

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
