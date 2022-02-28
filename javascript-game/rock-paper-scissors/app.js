const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
// By getElementById we can access the tag of html 
const possibleChoices = document.querySelectorAll('button');
// By querySelectorAll we can access the HTML element tag 

let userInput
let computerInput
let res

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userInput = e.target.id
    userChoice.innerHTML = userInput
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 1) {
        computerInput = 'rock'
    }
    if (randomNumber === 2) {
        computerInput = 'paper'
    }
    if (randomNumber === 3) {
        computerInput = 'scissors'
    }
    computerChoice.innerHTML = computerInput
};

function getResult() {
    if (computerInput === userInput) {
        res = 'its a draw!'
    }
    if (computerInput === 'rock' && userInput === "paper") {
        res = 'you win!'
    }
    if (computerInput === 'rock' && userInput === "scissors") {
        res = 'you lost!'
    }
    if (computerInput === 'paper' && userInput === "scissors") {
        res = 'you win!'
    }
    if (computerInput === 'paper' && userInput === "rock") {
        res = 'you lose!'
    }
    if (computerInput === 'scissors' && userInput === "rock") {
        res = 'you win!'
    }
    if (computerInput === 'scissors' && userInput === "paper") {
        res = 'you lose!'
    }

    result.innerHTML = res
};