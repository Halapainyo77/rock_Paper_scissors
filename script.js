let playerScore = 0;
let computerScore = 0;

const gameChoices =["Rock","Paper","Scissors"]
const getComputerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];

const playerSelection = prompt ("Rock, paper, or scissors, what do you choose human?").toLowerCase();
const computerSelection = getComputerChoice;     