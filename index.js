
class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];

    const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['spades', 'hearts', 'clubs', 'diamonds'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < rankOrder.length; j++) {
        this.cards.push(new Card(rankOrder[j], suits[i]));
      }
    }
  }
  
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let currentIndex = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = currentIndex;
    }
  }
}

const myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck.cards);


    // split 26 out of 52 total cards between each of the players

    deal(player1, player2);
        player1.hand = [this.deck.slice(0,26)];
        player2.hand = [this.deck.slice(26,52)];
  
  class WarGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
    
    //assign the player names

    createPlayer(player) {
        let name = propmt(`enter name of player ${player}.`,`player ${player}`);
        while (name == ''|| name === null) {
            name = prompt (`who is playing? ${player}.`);
        }
        this.players.push(new Player(name)); 
        const playerDiv = document.querySelector('#' + player);
        playerDiv.textContent = name;
    }

    //run the game
    start() {
        document.querySelector('#startbutton').disabled = true;
        this.createPlayer('1');
        this.createPlayer('2');

        const gameDeck = new Deck;
        gameDeck.shuffle();
        gameDeck.deal(this,player[0], this.player[1]);
        this.playCards(this.players[0], this.players[1]);
   
    }
  
    playRound() {
      if (player1 > player2) {
        this.player1.playcard();
        console.log(`player1 played ${player1} and player2 played ${player2} point player 1`);
       } else if (player2 > player1) {
        this.player2.point();
        console.log(`player 1 played ${player1} and player2 played ${player2} player point`);
       }else{
        console.log(`player1 played ${player1} and player2 played ${player2} no point awarded`);
        
       }
       }

    
    declareWinner() {
  
    }
