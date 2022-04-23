// Your Code Here
let userName = window.prompt("Please enter your name:");
console.log(userName);
let userScore = 0;
let playAgain = true;

function playGame() {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    //I added toUpperCase to convert the userAnswer to only capital letters.
    let userAnswer = window.prompt(questions[i].text);
    console.log(userAnswer.toUpperCase());
    if (userAnswer.toUpperCase() === question.correctAnswer) {
      console.log("Correct");
      userScore = userScore + 10;
    } else if (userAnswer.toUpperCase() != question.correctAnswer) {
      console.log("Wrong");
    }
  }
  window.alert("Your score is: " + userScore);
}

while (playAgain === true) {
  playGame();
  let userChoice = window.prompt(
    "Would you like to play the game again? Answer Yes or No."
  );
  //This resets the score if the user wants to play the game again.
  userScore = 0;
  //I added toLowerCase to make the userChoice to lower case.
  if (userChoice.toLowerCase() === "yes") {
    console.log(userChoice.toLowerCase());
    playAgain = true;
  } else {
    playAgain = false;
    //This prints Thanks for playing the game with the userName!
    window.alert(`Thanks for playing the game ${userName}!`);
  }
}
