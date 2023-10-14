const submitButton = document.querySelectorAll("[data-submit]")[0];
const inputField = document.querySelector(".guessField");
const guesses = document.querySelectorAll("[data-guesses]")[0];
const lastResult = document.querySelectorAll("[data-lastResult]")[0];
const lowOrHi = document.querySelectorAll("[data-lowOrHi]")[0];

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(inputField.value);
  console.log(randomNumber);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  inputField.value = "";
  inputField.focus();
}

function setGameOver() {
  inputField.disabled = true;
  submitButton.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const results = document.querySelectorAll(".results p");
  for (let i = 0; i < results.length; i++) {
    results[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  inputField.disabled = false;
  submitButton.disabled = false;
  inputField.value = "";
  inputField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

submitButton.addEventListener("click", checkGuess);
