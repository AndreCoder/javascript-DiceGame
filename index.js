// TODO One Create index.js file


// TODO Three Create a new variable called randomNumber1 
// then set the value of this variable to a 
// random number between 1 and 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// TODO Random for Player 1 Dice
document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// TODO Three Create a new variable called randomNumber1 
// then set the value of this variable to a 
// random number between 1 and 6.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// TODO Random for Player 1 Dice
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


//Change the text in the h1, (which currently says Refresh Me)
//to show which user won or if there was a draw depending on the
// dice values of player 1 (left) and player 2 (right)

// if Player 1 won
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}