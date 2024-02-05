let playerScore = 0;
let computerScore = 0;

const gameChoices =["rock","paper","scissors"]
const getComputerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];

const playerSelection = prompt ("Rock, paper, or scissors, what do you choose human?").toLowerCase();
const computerSelection = getComputerChoice;

function playRound() {
    
    
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    return "Paper beats rock, you lose this round!";
      
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
      playerScore += 1;
      return "Rock beats scissors, you win this round!";
      
    }
    else if (playerSelection == "rock" && computerSelection == "rock"){
      return "Rock and rock, it's a tie!";

    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore += 1;
      return "Scissors beats paper, you lose this round!";
      
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
      playerScore += 1;
      return "Paper beats rock, you win this round!";
      
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
      return "Paper and paper, it's a tie!";

    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore += 1;
      return "Rock beats scissors, you lose this round!";
      
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
      playerScore += 1;
      return "Scissors beats paper, you win this round!";
      
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
      return "Scissors and scissors, it's a tie!";

    }
    else {
      return "You need to choose from rock, paper, or scissors."
    }
    
  }
       
    
      
    
    
  