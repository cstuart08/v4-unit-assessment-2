//const e = require("express")

const formBtn = document.getElementById("close-form")

var form = document.querySelector('form')

let toggler = () => {
    form.classList.toggle('hide')
    if (formBtn.innerText === 'X') {
        formBtn.innerText = '+'
    } else {
        formBtn.innerText = 'X'
    }
}

formBtn.addEventListener('click', toggler)

var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')

var emailList = []

let formContainer = document.querySelector('.form-container')

let removeMessage = () => {
    formContainer.remove()
}

let displayThankYou = () => {
    formContainer.innerText = "Thank you for subscribing!"
    setTimeout(removeMessage, 3000)
}

function validateForm() {
    if (nameInput.value === "" && emailInput.value === "") {
        nameInput.style = 'border: red solid 2px'
        emailInput.style = 'border: red solid 2px'
        alert('You must enter a name and an email address to subscribe!')
    } else if (nameInput.value === "") {
        nameInput.style = 'border: red solid 2px'
        alert('Please enter a name to subscribe.')
    } else if (emailInput.value === "") {
        emailInput.style = 'border: red solid 2px'
        alert('Please enter an email to subscribe.')
    } else {
        let obj = {
            name: nameInput.value,
            email: emailInput.value
        }
        emailList.push(obj)
        displayThankYou()
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateForm()
})

nameInput.addEventListener('change', () => {
    nameInput.style.border = 'none'
})

emailInput.addEventListener('change', () => {
    emailInput.style.border = 'none'
})

const cart = document.createElement('div')

let main = document.querySelector('.hero')

let cartItems = 0

let addToCart = () => {
    if (cartItems === 0) {
        cartItems = 1
        cart.setAttribute('class', 'cart-display')
        cart.innerText = 'Your Cart: 1 item'
        main.appendChild(cart)
    } else {
        cartItems += 1
        cart.innerText = `Your Cart: ${cartItems} items`
    }
}