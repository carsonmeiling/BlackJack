// Welcome to Blackjack

// DOM Variables
let dealerCard1 = document.getElementById("dealerCard1");
let dealerCard2 = document.getElementById("dealerCard2");
let dealerCard3 = document.getElementById("dealerCard3");
let dealerCard4 = document.getElementById("dealerCard4");
let dealerCard5 = document.getElementById("dealerCard5");
let dealerCard6 = document.getElementById("dealerCard6");

let playerCard1 = document.getElementById("playerCard1");
let playerCard2 = document.getElementById("playerCard2");
let playerCard3 = document.getElementById("playerCard3");
let playerCard4 = document.getElementById("playerCard4");
let playerCard5 = document.getElementById("playerCard5");
let playerCard6 = document.getElementById("playerCard6");

// buttons


// On window load
window.onload = function() {
  let hit = document.getElementById("hit");
  let stay = document.getElementById("stay");
  let startBtn = document.getElementById("start");
  startBtn.addEventListener("click", startNewGame);
  dealerCard3.style.display = 'none';
  dealerCard4.style.display = 'none';
  dealerCard5.style.display = 'none';
  dealerCard6.style.display = 'none';

  playerCard3.style.display = 'none';
  playerCard4.style.display = 'none';
  playerCard5.style.display = 'none';
  playerCard6.style.display = 'none';

}

// creates a deck of cards as array of objects
function createDeck() {
  let deck = [];
  let suites = ["Hearts", "Clubs", "Diamonds", "Spades"];
  let cardValues = [{
    name: "Two",
    value: 2
  }, {
    name: "Three",
    value: 3
  }, {
    name: "Four",
    value: 4
  }, {
    name: "Five",
    value: 5
  }, {
    name: "Six",
    value: 6
  }, {
    name: "Seven",
    value: 7
  }, {
    name: "Eight",
    value: 8
  }, {
    name: "Nine",
    value: 9
  }, {
    name: "Ten",
    value: 10
  }, {
    name: "Jack",
    value: 10
  }, {
    name: "Queen",
    value: 10
  }, {
    name: "King",
    value: 10
  }, {
    name: "Ace",
    value: 11
  }];

  for (let suitesIndex = 0; suitesIndex < suites.length; suitesIndex++) {
    for (let cardValuesIndex = 0; cardValuesIndex < cardValues.length; cardValuesIndex++) {
      deck.push({
        suite: suites[suitesIndex],
        value: cardValues[cardValuesIndex],
        image: 'Images/' + cardValues[cardValuesIndex].name + 'of' + suites[suitesIndex] + '.png'
      });
    }
  }

  return deck
}

// This takes a ordered deck, and shuffles the deck
function shuffle(orderedDeck) {
  var currentIndex = orderedDeck.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = orderedDeck[currentIndex];
    orderedDeck[currentIndex] = orderedDeck[randomIndex];
    orderedDeck[randomIndex] = temporaryValue;
  }

  return orderedDeck;
}

// Deals new cards from top of deck. One card to dealer and two player.

function dealCards(deck) {

  dealerCard1.setAttribute("src", deck[0].image);
  deck.shift();
  playerCard1.setAttribute("src", deck[0].image);
  deck.shift();
  playerCard2.setAttribute("src", deck[0].image);
  deck.shift();
  return deck;
}

function startNewGame() {
  let deck = createDeck();
  let shuffled_deck = shuffle(deck);
  dealCards(shuffled_deck);
}

// Hit button, adds new card to player cards 3-6
// needs work, cards are not changing src
hit.addEventListener('click', function(deck) {

  if (playerCard3.style.display === 'none') {
    playerCard3.style.display = "inline";
    playerCard3.setAttribute("src", deck[0].image);
    deck.shift();
  } else if (playerCard4.style.display === 'none') {
    playerCard4.style.display = 'inline';
    playerCard4.setAttribute("src", deck[0].image);
    deck.shift();
  } else if (playerCard5.style.display === 'none') {
    playerCard5.style.display = 'inline';
    playerCard5.setAttribute("src", deck[0].image);
    deck.shift();
  } else if (playerCard6.style.display === 'none') {
    playerCard6.style.display = 'inline';
    playerCard6.setAttribute("src", deck[0].image);
    deck.shift();
  } else;
});

// deals cards to dealer when the "stay" btn is clicked
stay.addEventListener('click', function(){

});

// Keeps track of player and dealer score
function playerScore(){
  // // TODO:
};

// Over 21 logic in Game
function over21(){
  // TODO:  
};
