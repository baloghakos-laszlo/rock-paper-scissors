function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = options[getRandomInt(0, 2)];
    return choice;
}



function playOneRound(playerSelection, computerSelection) {
    let playerSelectionCleanString = playerSelection.toLowerCase()

    let message = (`You chose ${playerSelectionCleanString}. The computer chose ${computerSelection}.`)
    console.log(message)
    if (playerSelectionCleanString == computerSelection) {
        return `${message} It's a tie!`
    }

    else if (
    (playerSelectionCleanString == "rock" && computerSelection == "scissors") ||
    (playerSelectionCleanString == "paper" && computerSelection == "rock") || 
    (playerSelectionCleanString == "scissors" && computerSelection == "rock") ) {
        return `${message} You won!`
    }

    else {
        return `${message} You lost!`
    }
}

    // switch (playerSelectionCleanString) {
    //     case "rock":
    //         if (computerSelection === "Rock") {
    //             return "The computer chose rock. It's a tie!";
    //         }
    //         else if (computerSelection === "Paper") {
    //             return "Paper beats Rock. You lost!";
    //         }

    //         else if (computerSelection === "Scissors") {
    //             console.log(playerSelectionCleanString);
    //             console.log(computerSelection);
    //         }

    //         break;

    //     case "paper":
    //         if (computerSelection === "Rock") {
    //             return "Paper beats rock. You won!";
    //         }
    //         else if (computerSelection === "Paper") {
    //             return "The computer chose Paper. It's a tie!";
    //         }

    //         else if (computerSelection === "Scissors") {
    //             return "Scissors beat paper. You lost!";
    //         }
    //         break;
    //     case "scissors":
    //         if (computerSelection === "Rock") {
    //             return "Rock beats scissors. You lost!";
    //         }
    //         else if (computerSelection === "Paper") {
    //             return "Scissors beat paper. You won!";
    //         }

    //         else if (computerSelection === "Scissors") {
    //             return "The computer chose scissors. It's a tie";
    //         }
    //         break;

    //     default:
    //         return "Are your sure you typed your choice correctly?";

    // }

