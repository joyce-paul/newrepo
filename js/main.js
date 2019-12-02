var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
}

flipCard([0]);
cardsInPlay.push(cards[0]);
flipCard([2]);
cardsInPlay.push(cards[2]);

checkForMatch();