document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
];

cardArray.sort(() => 0.5 - Math.random);

const gridDisplay = document.querySelector('#grid'); //access the element of HTML page by thier name 
const resultDisplay = document.querySelector('#result');
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')  //create.element createa a HTML element 
        card.setAttribute('src', 'images/blank.png') //setAttribute is use to set the value to specified element 
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    };
};


function checkMatch() {
    const cards = document.querySelectorAll('#grid img')

    console.log('check for match')
    if (cardChosenIds[0] == cardChosenIds[1]) {
        cards[cardChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardChosenIds[1]].setAttribute('src','images/blank.png')
        alert('You clicked on same card')
    }
    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match!')
        cards[cardChosenIds[0]].setAttribute('src','images/white.png')
        cards[cardChosenIds[1]].setAttribute('src','images/white.png')
        cards[cardChosenIds[0]].removeEventListner('click', flipCard)
        cards[cardChosenIds[1]].removeEventListner('click', flipCard)
        cardsWon.push(cardChosen)
    } else {
        cards[cardChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardChosenIds[1]].setAttribute('src','images/blank.png')
        alert('Sorry try in afgan')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardChosen = []
    cardChosenIds = []
    if (cardsWon == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulation you found all of them'
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id') //method of the Element interface returns the value of a specified attribute on the element.
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    //setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    };
};
createBoard()
})