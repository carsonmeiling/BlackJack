// jshint esversion:6

// Welcome to Blackjack

let deck = [];
let dealersHand = [];
let playersHand = [];
let dealersTotal = 0;
let playersTotal = 0;

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

  document.getElementById('hit').style.display = 'none';
  document.getElementById('stay').style.display = 'none';

};

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

  return deck;
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
  let shiftedCard = deck.shift();
  dealersHand.push(shiftedCard);
  playerCard1.setAttribute("src", deck[0].image);
  let shiftedCard2 = deck.shift();
  playersHand.push(shiftedCard2);
  playerCard2.setAttribute("src", deck[0].image);
  let shiftetCard3 = deck.shift();
  playersHand.push(shiftetCard3);

  playerScore();

  return deck;
  return dealersHand;
  return playersHand;
}

// Start new game when btn is clicked.
function startNewGame() {
  document.getElementById('reset').style.display = 'none';
  document.getElementById('hit').style.display = 'inline';
  document.getElementById('stay').style.display = 'inline';
  let newDeck = createDeck();
  let shuffledDeck = shuffle(newDeck);
  deck = dealCards(shuffledDeck);
  document.getElementById('start').style.display = "none";
  dealerScore();
}

// Hit button, adds new card to player cards 3-6
hit.addEventListener('click', function() {
  console.log(deck);
  if (playerCard3.style.display === 'none') {
    playerCard3.style.display = "inline";
    playerCard3.setAttribute("src", deck[0].image);
    let shiftedCard = deck.shift();
    playersHand.push(shiftedCard);
  } else if (playerCard4.style.display === 'none') {
    playerCard4.style.display = 'inline';
    playerCard4.setAttribute("src", deck[0].image);
    let shiftedCard2 = deck.shift();
    playersHand.push(shiftedCard2);
  } else if (playerCard5.style.display === 'none') {
    playerCard5.style.display = 'inline';
    playerCard5.setAttribute("src", deck[0].image);
    let shiftedCard3 = deck.shift();
    playersHand.push(shiftedCard3);
  } else if (playerCard6.style.display === 'none') {
    playerCard6.style.display = 'inline';
    playerCard6.setAttribute("src", deck[0].image);
    let shiftedCard4 = deck.shift();
    playersHand.push(shiftedCard4);

    return playersHand;
  }
  playerScore();
  bust();
});

// Gives cards to dealer deck when stay btn is clicked
stay.addEventListener('click', function() {
  document.getElementById('stay').style.display = 'none';
  document.getElementById('hit').style.display = 'none';
  dealerCard2.setAttribute("src", deck[0].image);
  let shiftedCard = deck.shift();
  dealersHand.push(shiftedCard);
  console.log('dealcard2 btn');
  dealerScore();
  for (let i = 0; i < 4; i++) {
    console.log(i);
    over21();
  }
  return dealersHand;
});

// Keeps track of player score
function playerScore() {
  let total = 0;
  for (i = 0; i < playersHand.length; i++) {
    total = playersHand[i].value.value + total;
    document.getElementById('playerTotal').innerHTML = "Player Total: " + total;
  }
  playersTotal = total;
  return total;
  return playersTotal;
}

// Keeps track of the dealer's score
function dealerScore() {
  let total = 0;
  for (i = 0; i < dealersHand.length; i++) {
    total = dealersHand[i].value.value + total;
    document.getElementById('dealerTotal').innerHTML = "Dealer Total: " + total;
  }
  dealersTotal = total;
  return total;
  return dealersTotal;
}

// stay button clicked, adds cards to dealer deck while under 17
function over21() {
  if (dealersTotal < 17 && dealerCard2.src == "Images/cardBack.png") {
    dealerCard2.style.display = 'inline';
    dealerCard2.setAttribute('src', deck[0].image);
    let shiftedCard = deck.shift();
    dealersHand.push(shiftedCard);
    console.log("dealcard2");

    dealerScore();
  } else if (dealersTotal < 17 && dealerCard3.style.display == 'none') {
    dealerCard3.style.display = 'inline';
    dealerCard3.setAttribute('src', deck[0].image);
    let shiftedCard = deck.shift();
    dealersHand.push(shiftedCard);
    dealerScore();
  } else if (dealersTotal < 17 && dealerCard4.style.display == 'none') {
    dealerCard4.style.display = 'inline';
    dealerCard4.setAttribute('src', deck[0].image);
    let shiftedCard = deck.shift();
    dealersHand.push(shiftedCard);
    dealerScore();
  } else if (dealersTotal < 17 && dealerCard5.style.display == 'none') {
    dealerCard5.style.display = 'inline';
    dealerCard5.setAttribute('src', deck[0].image);
    let shiftedCard = deck.shift();
    dealersHand.push(shiftedCard);
    dealerScore();
  } else if (dealersTotal < 17 && dealerCard6.style.display == 'none') {
    dealerCard6.style.display = 'inline';
    dealerCard6.setAttribute('src', deck[0].image);
    let shiftedCard = deck.shift();
    dealersHand.push(shiftedCard);
    dealerScore();
  }
  winner();

}

// bust function will run over21 if the player's score goes over 21

function bust() {
  console.log(playersTotal);
  if (playersTotal > 21) {
    console.log("player over 21");
    over21();
  }

}

// This function determines who wins and sends an alert
function winner() {
  document.getElementById('reset').style.display = 'inline';
  console.log("winner function ran");
  if (dealersTotal <= 21 && playersTotal >= 22){
    setTimeout(function() {
      alert("Dealer Wins, Better Luck Next Time!");
    }, 1000);
  } else if (playersTotal <= 21 && dealersTotal >= 22){
    setTimeout(function() {
      alert("You Win, Want To Play Again?");
    }, 1000);
  } else if (dealersTotal > playersTotal && dealersTotal <= 21) {
    setTimeout(function() {
      alert("Dealer Wins, Better Luck Next Time!");
    }, 1000);
  } else if (playersTotal > dealersTotal && playersTotal <= 21) {
    setTimeout(function() {
      alert("You Win, Want To Play Again?");
    }, 1000);
  } else if (playersTotal == dealersTotal) {
    setTimeout(function() {
      alert("You Push, give It Another Go!");
    }, 1000);
  }
}

// reset button to start game again
function reset(){
  location.reload();
}
document.getElementById('reset').addEventListener('click',function(){
  console.log('reset clicked');
  location.reload();
}
);
