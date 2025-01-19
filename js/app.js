"use strict";

const resultEl = document.getElementById("guess-message");
const currentGuessEl = document.getElementById("current-guess");
const computerGuessEl = document.getElementById("computer-guess");
const guessInputEl = document.getElementById("guess-input");
const guessHistoryEl = document.getElementById("guess-history");
const submissionBtn = document.getElementById("submit-btn")
const restartBtn = document.getElementById("restart-btn");

let currentGuess;
let playerGuesses = [];
let remainingGuesses = 3;
let computerNumber;

function updateComputerGuess() {
    let min = 1; 
    let max = 10; 
    computerNumber = Math.floor((Math.random() * (max - min)) + min);
    computerGuessEl.innerHTML = computerNumber;
}

function updateCurrentGuess() {
    currentGuess = guessInputEl.value; 
    currentGuessEl.innerHTML = currentGuess;  
 }

function updateResult() {
    if (currentGuess > computerNumber) {
    resultEl.innerHTML = "Too high!"
} else if (currentGuess < computerNumber) {
    resultEl.innerHTML = "Too low!"
} else if (currentGuess === computerNumber) {
    resultEl.innerHTML = "You win! You guessed correctly!";
} 
}

function updatePlayerGuesses() {
    playerGuesses.push(currentGuess);
    if (remainingGuesses > 0) {
    remainingGuesses -= 1;
    }  
   }

function updateGuessHistory() {
    guessHistoryEl.innerHTML = "";
   let i;
    for (i = 0; i < playerGuesses.length; i++) {
       guessHistoryEl.innerHTML += playerGuesses[i] + " ";
    }    
}



function gameOver() {
    if (remainingGuesses === 0) {
        submissionBtn.disabled = true;
        restartBtn.disabled = false;
        resultEl.innerHTML = "You lose. Try again!";
    }
}

function render() {
    updateComputerGuess();
    updateCurrentGuess();
    updateResult();  
    updatePlayerGuesses();  
    updateGuessHistory();
    gameOver();
}

submissionBtn.addEventListener("click", function () {
    render();
});

function resetGame() {
    resultEl.innerHTML = "";
    currentGuessEl.innerHTML = "";
    guessHistoryEl.innerHTML = "";
    computerGuessEl.innerHTML = "";
    remainingGuesses = 3;
    playerGuesses = [];
    submissionBtn.disabled = false;
    restartBtn.disabled = true;
} 

restartBtn.addEventListener("click", function () {
    resetGame();
});