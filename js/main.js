var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
}

flipCard([0]);
cardsInPlay.push(cards[0].rank);
console.log(cards[0].cardImage); 
console.log(cards[0].suit); 

flipCard([2]);
cardsInPlay.push(cards[2].rank);
console.log(cards[2].cardImage); 
console.log(cards[2].suit); 

checkForMatch();