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

console.log(getComputerChoice())