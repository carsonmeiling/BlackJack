// Welcome to Blackjack

// Creates the deck of cards.

var deck = [];

// creates a deck of cards as array of objects
function createDeck() {
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
        image: cardValues[cardValuesIndex].name + 'of' + suites[suitesIndex]
      });

    }
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
  shuffle(deck);
}

// Deals new cards from top of deck. One card to dealer and two player.


// startingDeal is activatd by "Start" button click
let startBtn = document.getElementById("start");
startBtn.addEventListener("Click", function () {
  let dealerCard1 = document.getElementById("dealerCard1");
  let playerCard1 = document.getElementById("dealerCard1");
  let playerCard2 = document.getElementById("dealerCard2");

  dealerCard1.setAttribute("src", "Images/" + deck[0].image + ".png");
    deck.shift();
  playerCard1.setAttribute("src", "Images/" + deck[0].image + ".png");
    deck.shift();
  playerCard2.setAttribute("src", "Images/" + deck[0].image + ".png");
    deck.shift();
}
);



// function dealCard(deck) {
//   // This function modifies the `deck` parameter in place
//   cardIndex = Math.floor(Math.random() * deck.length);
//   var card = deck.splice(cardsIndex, 1)[0];
//   return card;
// }



// function dealCards(deck, numberOfCards) {
//   var cards = [];
//   for (i = 0; i < numberOfCards; i++) {
//     var card = dealCard(deck);
//     cards.push(card);
//   }
//   return cards;
// }
//
// function dealCardsToPlayers(deck, numberOfPlayers, numberOfCards) {
//   var playerCards = {};
//   for (i = 0; i < numberOfPlayers; i++) {
//     cards = dealCards(deck, numberOfCards);
//     playerCards[i] = cards;
//   }
//   return playerCards;
// }