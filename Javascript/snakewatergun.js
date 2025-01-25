const choices = ["Snake", "Water", "Gun"];

const playerChoice = prompt("Enter your choice");

const computerChoice = choices[Math.floor(Math.random()*choices.lenght)];

console.log("Your choice:", playerChoice);
console.log("Computer's choice:", computerChoice);

let result = "";
if (playerChoice === computerChoice) {
  result = "It's a draw!";
} else if (
  (playerChoice === "Snake" && computerChoice === "Water") ||
  (playerChoice === "Water" && computerChoice === "Gun") ||
  (playerChoice === "Gun" && computerChoice === "Snake")
) {
  result = "You win!";
} else {
  result = "Computer wins!";
}

console.log(result);
