//Array
let cards = [];

let sumCard = 0;

let hasBlackJack = false;
let isAlive = false;

let callMessage = '';

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");

//Object
let player = {
    name: 'Eugene',
    chips: 150,
    }

let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
    const randomRender = Math.floor(Math.random() * 13) + 1;

    if (randomRender === 1) {
        return 11;
    } else if (randomRender > 10) {
        return 10;
    } else return randomRender;
}

function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];

    sumCard = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards: ';

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    sumEl.textContent = 'Sum: ' + sumCard;

    if (sumCard <= 20) {
        callMessage = 'Maybe, more card?';
    } else if (sumCard === 21) {
        callMessage = 'Win, this`s BlackJack!!!';
        hasBlackJack = true;
    } else {
        callMessage = 'Game over!!!';
        isAlive = false;
    }
    messageEl.textContent = callMessage
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
    
        sumCard += card;

        cards.push(card);

        renderGame();
    }
}

