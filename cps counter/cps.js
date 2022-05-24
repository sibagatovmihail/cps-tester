const bodyT = document.body
const wrapper = document.querySelector('.wrapper')
const startBtn = document.querySelector('.start-button')
const cpsCountBtn = document.querySelector('.counter')
const tryAgainBtn = document.querySelector('.try-again')
const modalWindow = document.querySelector('.modal-results')
const cps = document.querySelector('.cps')
let cpsQty = 0
let cpsCalc = 0

function clickAdd() {
    cpsCountBtn.addEventListener('click', clickCounter,)
}
function clickRemove() {
    cpsCountBtn.removeEventListener('click', clickCounter)
}
function clickCounter() {
    cpsQty++
    console.log(cpsQty)
}

function clickStart() {
    cpsCountBtn.classList.add('counter-red-border')
    startBtn.classList.add('invise')
    setTimeout(() => {
        cpsCountBtn.classList.remove('counter-red-border')
        cpsCountBtn.classList.add('counter-start-bg')
    }, 3000)
    setTimeout(clickAdd, 3000)
    setTimeout(() => {
        clickRemove()
        cpsCalc = cpsQty /= 10
        cps.innerHTML = cpsCalc
    }, 13000)
    setTimeout(() =>
    cpsCountBtn.classList.remove('counter-start-bg'), 13000)
    setTimeout(() => {
        modalWindow.classList.remove('modal-invise')
        bodyT.classList.add('modal-body')
    }, 13500)
    setTimeout(() => {
        tryAgainBtn.classList.remove('invise')
    }, 15000)
    
}

function tryAgain() {
    cpsCalc = 0
    cpsQty = 0 
    modalWindow.classList.add('modal-invise')
    bodyT.classList.remove('modal-body')
    startBtn.classList.remove('invise')
    tryAgainBtn.classList.add('invise')
    setTimeout(() =>{
        tryAgainBtn.classList.remove('invise')
    }, 15000)
}



startBtn.addEventListener('click', clickStart)

tryAgainBtn.addEventListener('click', tryAgain)






