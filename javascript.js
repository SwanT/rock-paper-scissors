// Create a choice variable for the computer
// Assing a value of rock paper or scissors at random
// When the user inputs their response verify that it conforms to an allowed value
// If the value is correct compare it to the computers stored value
// If computer won print you lose and ask to play again and assign a new value to the computer
// If player won, print you won and ask to play again and assign a new value to the computer
let round = 0;
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
// Adds the copmuters choice with a value of null
    let computerChoice = '';
// Adds a variabe to store a random number between 0 and 0.99
    let randomNumber = Math.random();

// This if statements assigns a choice of either Rock, Paper or Scissors depending on the value contained in randomNumber
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber >= 0.66) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "paper";
    }
    return computerChoice;
}



function getHumanChoice(){
    let playerChoice = prompt("Please enter your selection: Rock, Paper or Scissors.")
    //playerSelect = playerChoice.toLowerCase();
      //      if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        //        playerChoice = playerChoice;
          //  }
        //else {
          //  console.log("Invalid entry")
           // getHumanChoice();
        //}
        return playerChoice.toLowerCase();
}

playGame ();

function playGame (){


//getHumanChoice();
//getComputerChoice();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock"  
        || humanChoice === "scissors" && computerChoice === "paper"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore = humanScore + 1;
            round = round + 1;
        } 
    else if (humanChoice === computerChoice){
        console.log("It is a draw!")
        round = round + 1;
    }    
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore = computerScore + 1;
        round = round + 1;
    }
}

playRound(humanSelection, computerSelection);
console.log(`Your Score: ${humanScore}`);
console.log(`The computer's score ${computerScore}`);

console.log(round);

if (round < 5) {
    playGame()
}
else {
    if (humanScore > computerScore) {
    console.log ("Game Over! You won!");
    }
    else if (computerScore > humanScore){
        console.log("Game over! You lost!");
    }
    else {
        console.log("It is a draw!")
    }
}

}

