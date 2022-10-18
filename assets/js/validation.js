export const validation =  {
    res: [],
    wrapper: null,

    //Метод контрольной валидации перед отправкой
    validForm(elem, formData) {
        this.wrapper = elem.querySelectorAll('.form__wrapper');
        this.wrapper.forEach(el => {
            let input = el.querySelector('input')
            let feedback = el.querySelector('.feedback')
            let method = 'Valid' + input.name[0].toUpperCase() + input.name.slice(1)
            if (method in this) {
                this.res.push(this[method](formData.get(input.name), input, feedback))
            }
        })
        for (let value of this.res) {
            if(!value) {return false}
        }
        return true
    },

    //ВЫВОД ОШИБОК
    showError(str, input, feedback) {
        input.classList.remove("border-valid")
        input.classList.add('border-invalid')
        feedback.classList.add('invalid-feedback')
        feedback.innerHTML = str
    },
    showSuccess(input, feedback) {
        input.classList.remove("border-invalid")
        input.classList.add('border-valid')
        feedback.classList.remove('invalid-feedback')
        feedback.innerHTML = ''
    },

    // СОБЫТИЯ ОТСЛЕЖИВАНИЯ ВВОДА СИМВОЛОВ
    handleEventName(event) {
        let input = event.target
        let feedback = event.path[1].querySelector('.feedback')
        validation.ValidName(event.target.value, input, feedback)
    },
    handleEventSurname(event) {
        let input = event.target
        let feedback = event.path[1].querySelector('.feedback')
        validation.ValidSurname(event.target.value, input, feedback)
    },
    handleEventEmail(event) {
        let input = event.target
        let feedback = event.path[1].querySelector('.feedback')
        validation.ValidEmail(event.target.value, input, feedback)
    },
    handleEventPhone(event) {
        let input = event.target
        let feedback = event.path[2].querySelector('.feedback')
        validation.ValidPhone(event.target.value, input, feedback)
    },


    //МЕТОДЫ ПРОВЕРКИ (СОДЕРЖАТ ПРАВИЛА ПРОВЕРКИ)
    ValidName(name, input, feedback) {
        if (name.replace(/\s/g, '') === "") {
            this.showError(`Поле "${input.placeholder}" не должно быть пустым`, input, feedback)
            return false
        }
        this.showSuccess(input, feedback)
        return true
    },

    ValidSurname(name, input, feedback) {
        if (name.replace(/\s/g, '') === "") {
            this.showError(`Поле "${input.placeholder}" не должно быть пустым`, input, feedback)
            return false
        }
        this.showSuccess(input, feedback)
        return true
    },

    ValidEmail(email, input, feedback) {
        if (email.replace(/\s/g, '') === "") {
            this.showError(`Поле "${input.placeholder}" не должно быть пустым`, input, feedback)
            return false
        }
        const regex = /^([\w]+\.?)+(?<!\.)@(?!\.)[a-zа-я0-9ё\.-]+\.?[a-zа-яё]{2,}$/ui;
        let result = email.match(regex);
        if (!result) {
            this.showError('Недопустимый формат email-адреса', input, feedback)
            return false
        }
        this.showSuccess(input, feedback)
        return true
    },

    ValidPhone(phone, input, feedback) {
        // проверка на пустоту
        if (phone.replace(/\s/g, '') === "") {
            this.showError(`Поле "Номер телефона" не должно быть пустым`, input, feedback)
            return false
        }
        // ввод только цифр
        const regex = /([0-9]|[()|-]|\s){1,}/g;
        let match = phone.match(regex)
        if (!match) {
            input.value = ''
            this.showError(`Поле "Номер телефона" может содержать только цифры`, input, feedback)
            return false
        }else {
            input.value = match[0]
        }
        // Проверка длинны телефона в соответсвии плейсхолдера

        let place = input.placeholder.replace(/([()|-]|\s)/g, '')
        if (phone.replace(/([()|-]|\s)/g, '').length > (place.length + 1)) {
            this.showError(`Номер телефона лишком длинный`, input, feedback)
            return false
        }
        if (phone.replace(/([()|-]|\s)/g, '').length < (place.length - 2)) {
            this.showError(`Номер телефона лишком короткий`, input, feedback)
            return false
        }
        this.showSuccess(input, feedback)
        return true
    }
}