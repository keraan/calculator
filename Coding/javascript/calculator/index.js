const oneEl = document.getElementById("1")
const twoEl = document.getElementById("2")
const threeEl = document.getElementById("3")
const fourEl = document.getElementById("4")
const fiveEl = document.getElementById("5")
const sixEl = document.getElementById("6")
const sevenEl = document.getElementById("7")
const eightEl = document.getElementById("8")
const nineEl = document.getElementById("9")
const zeroEl = document.getElementById("0")
const addEl = document.getElementById("+")
const minusEl = document.getElementById("-")
const divideEl = document.getElementById("/")
const multiplyEl = document.getElementById("*")
const equalsEl = document.getElementById("=")
const answerEl = document.getElementById("answer")

let num1 = null
let num2 = null
let operator = null

function sum(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1/num2
}

function updateAnswer(num) {
    answerEl.textContent += num
}

function updateNum2() {
    num2 = null
}

function update() {
    answerEl.textContent = answer
    num1 = answer
    num2 = null
    operator = null
}

oneEl.addEventListener('click', () => {
    if (num1 === null) {
        num1 = 1
        updateAnswer(num1)
    }
    else {
        num2 = 1
        updateAnswer(num2)
    }
})

addEl.addEventListener('click', () => {
    operator = '+'
    answerEl.textContent += '+'
})

equalsEl.addEventListener('click', () => {
    if (operator === '+') {
        answer = sum(num1, num2)
        update()
    }
})
