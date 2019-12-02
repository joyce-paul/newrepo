// General Assembly's Memory Game

// Card Variables
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
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};


function flipCard() {
	var cardId = this.getAttribute("data-id");	
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage); 
	console.log(cards[cardId].suit); 
	console.log("User flipped " + cards[cardId].rank);
	checkForMatch();
};



// Code from previous exercise
// cardsInPlay.push(cards[2].rank);
// console.log(cards[2].cardImage); 
// console.log(cards[2].suit); 


// Function for creating a board
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}



// Calling the createBoard function
createBoard();
