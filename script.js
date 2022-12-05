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


let win
let lose

function playOneRound(playerSelection, computerSelection) {
    

    let playerSelectionCleanString = playerSelection.toLowerCase();

    //if statement to check the input is valid
    if ( !(options.includes(playerSelectionCleanString)) ){
        console.log( "Are your sure you typed your choice correctly?");
        return;
    }

    let message = (`You chose ${playerSelectionCleanString}. The computer chose ${computerSelection}.`);

    if (playerSelectionCleanString == computerSelection) {
        console.log(`${message} It's a tie!`);
        

    }

    else if (
    (playerSelectionCleanString == "rock" && computerSelection == "scissors") ||
    (playerSelectionCleanString == "paper" && computerSelection == "rock") || 
    (playerSelectionCleanString == "scissors" && computerSelection == "rock") ) {
        console.log( `${message} You won!`);
        win++
    }

    else {
        console.log( `${message} You lost!`)
        lose++
    }
}

function game(numGames = 5) {
     win = 0
     lose = 0

    for (let i = 0; i < numGames; i++) {
        let guess = prompt("Please enter your guess!");
        playOneRound(guess, getComputerChoice());
     }

    console.log("Computer wins:" + lose)
    console.log("Your wins:" +win)

     if (win == lose) {
        console.log("It's a tie!")
     }

    else if (win > lose) {
        console.log("You beat the computer! Congratulations")        
     }

     else {
        console.log("You lost! Try again next time.")
     }
}
