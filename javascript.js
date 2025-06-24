let humanScore = 0;
let computerScore = 0;

// Function to randomly return rock, paper or scissors.

function getComputerChoice() {
    // Pick a random number up to 3 and round down to integer.
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else if (randomNum == 2) {
        return "scissors";
    }
}

// Get choice from human player.

function getHumanChoice() {
    let humChoice = window.prompt("Choose rock, paper, or scissors");
    return humChoice;
}

// Game Play Loop

function playRound() {
    humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        console.log("IT'S A TIE!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("YOU WIN! ROCK BEATS SCISSORS!")
        humanScore +=1
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("YOU WIN! PAPER BEATS SCISSORS!")
        humanScore +=1
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("YOU WIN! SCISSORS BEATS PAPER!")
        humanScore +=1
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("YOU LOSE! ROCK BEATS SCISSOR!")
        computerScore +=1
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("YOU LOSE! PAPER BEATS ROCK!")
        computerScore +=1
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("YOU LOSE! SCISSORS BEATS PAPER!")
        computerScore +=1
    }
}


playRound();
