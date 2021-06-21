// всплывающая форма
const hideForm = document.querySelector(".hide-form");
const orderTicket = document.querySelector('.order-ticket');
const orderTicketFormWrapper =document.querySelector('.order-ticket__form-wrapper')
const orderTicketPreloaderWrapper =document.querySelector('.order-ticket__preloader-wrapper')
const orderTicketThanksWrapper =document.querySelector('.order-ticket__thanks-wrapper')
const orderTicketThanksName =document.querySelector('.order-ticket__thanks-name')
// опредеяем высоту
const heightForm = orderTicket.offsetHeight

setTimeout(() => {
    hideForm.style.bottom = -heightForm + 'px'
}, 0)
// SENDDATA
const sendData = (data, callback, callBefore) => {
    if(callBefore){
        callBefore()
    }
    fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(callback)
}


const showThankYou = (data) => {
    console.log(data)
    console.log("+")
    orderTicketPreloaderWrapper.style.display = 'none'
    orderTicketThanksWrapper.style.display = 'block'
    orderTicketThanksName.textContent = data.name

}


const showPreLoader = ()=>{
    orderTicketFormWrapper.style.display = 'none'
    orderTicketPreloaderWrapper.style.display = 'block'

}


// получаем открывашку формы

const orderTrigger = document.querySelector('.order-trigger')

orderTrigger.addEventListener('click', () => {
    hideForm.classList.toggle('hide-form-active')
})

const orderTicketForm = document.querySelector('.order-ticket__form')

orderTicketForm.addEventListener('change', (event) => {
    const target = event.target

    const label = target.labels[0]
    if (label && target.value) {
        label.classList.add('order-ticket__label-focus')
    } else {
        label.classList.remove('order-ticket__label-focus')
    }
})

orderTicketForm.addEventListener('submit', (e) => {
    e.preventDefault()
// собираем данные с формы
    const formData = new FormData(orderTicketForm)

    const data = {}
    for (const elem of formData) {
        const [name, value] = elem
        data[name] = value

    }
    console.log(data)
    sendData(data, showThankYou,showPreLoader())
})

