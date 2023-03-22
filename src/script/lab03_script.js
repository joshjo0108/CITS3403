const word = "apple";
const letterBoxes = document.querySelectorAll(".letter-box");
const checkButton = document.getElementById("check-button");
const resetButton = document.getElementById("reset-button");

checkButton.addEventListener("click", function() {
  let guess = "";
  let isGuessValid = true; // flag to track whether the guess is valid
  letterBoxes.forEach(function(letterBox) {
    const letter = letterBox.querySelector("input").value;
    guess += letter;
    if (letter === "") { // check if the input is empty
      isGuessValid = false;
      letterBox.style.backgroundColor = "red";
    } else if (word.includes(letter)) {
      if (word.indexOf(letter) === guess.indexOf(letter)) {
        letterBox.style.backgroundColor = "green";
      } else {
        letterBox.style.backgroundColor = "yellow";
      }
    } else {
      letterBox.style.backgroundColor = "white";
    }
  });
  
  if (isGuessValid && guess === word) {
    alert("You win!");
  }
});

resetButton.addEventListener("click", function() {
  letterBoxes.forEach(function(letterBox) {
    letterBox.querySelector("input").value = "";
    letterBox.style.backgroundColor = "white";
  });
});
