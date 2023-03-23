const word = "apple";
// Get all the letter boxes using .querySelectorAll()
const letterBoxes = document.querySelectorAll(".letter-box");
const checkButton = document.getElementById("check-button");
const resetButton = document.getElementById("reset-button");

checkButton.addEventListener("click", function() {
  let guess = "";
  let isGuessValid = true;
  let firstLetterCorrect = false; // track whether the first letter is correct
  letterBoxes.forEach(function(letterBox, index) {
    const letter = letterBox.querySelector("input").value;
    guess += letter;
    if (letter === "") {
      isGuessValid = false;
      letterBox.style.backgroundColor = "red";
    } else if (word.includes(letter)) {
      if (word.indexOf(letter) === guess.indexOf(letter)) {
        letterBox.style.backgroundColor = "green";
        if (index === 0) {
          firstLetterCorrect = true;
        }
      } else {
        letterBox.style.backgroundColor = "yellow";
      }
    } else {
      letterBox.style.backgroundColor = "white";
    }
  });
  
  if (isGuessValid && guess === word) {
    alert("You win!");
  } else if (firstLetterCorrect) {
    alert("The first is correct");
  } else {
    alert("The first is wrong");
  }
});


resetButton.addEventListener("click", function() {
  letterBoxes.forEach(function(letterBox) {
    letterBox.querySelector("input").value = "";
    letterBox.style.backgroundColor = "white";
  });
});
