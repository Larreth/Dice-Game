// first & second player dice number
let player1Score = Math.floor(Math.random() * 6) + 1;
let player2Score = Math.floor(Math.random() * 6) + 1;

let firstDice = document.querySelector(".img1");
let secondDice = document.querySelector(".img2");

// conditional logic for first dice
if (player1Score === 1) {
  firstDice.setAttribute("src", "images/dice1.png");
} else if (player1Score === 2) {
  firstDice.setAttribute("src", "images/dice2.png");
} else if (player1Score === 3) {
  firstDice.setAttribute("src", "images/dice3.png");
} else if (player1Score === 4) {
  firstDice.setAttribute("src", "images/dice4.png");
} else if (player1Score === 5) {
  firstDice.setAttribute("src", "images/dice5.png");
} else firstDice.setAttribute("src", "images/dice6.png");

// conditional logic for second dice
if (player2Score === 1) {
  secondDice.setAttribute("src", "images/dice1.png");
} else if (player2Score === 2) {
  secondDice.setAttribute("src", "images/dice2.png");
} else if (player2Score === 3) {
  secondDice.setAttribute("src", "images/dice3.png");
} else if (player2Score === 4) {
  secondDice.setAttribute("src", "images/dice4.png");
} else if (player2Score === 5) {
  secondDice.setAttribute("src", "images/dice5.png");
} else secondDice.setAttribute("src", "images/dice6.png");

// displaying results of dice
if (player1Score > player2Score) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (player2Score > player1Score) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else document.querySelector("h1").innerHTML = "It's a draw...";