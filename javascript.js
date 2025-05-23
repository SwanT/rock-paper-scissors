// Create a choise variable for the computer
// Assing a value of rock paper or scissors at random
// When the user inputs their response verify that it conforms to an allowed value
// If the value is correct compare it to the computers stored value
// If computer won print you lose and ask to play again and assign a new value to the computer
// If player won, print you won and ask to play again and assign a new value to the computer

let getComputerChoise = '';
randomNumber = Math.random();
if (randomNumber <= 0.33) {
    getComputerChoise = "Rock";
}
else if (randomNumber >= 0.66) {
    getComputerChoise = "Scissors";
}
else {
    getComputerChoise = "Paper";
}
console.log(randomNumber);
console.log(getComputerChoise);