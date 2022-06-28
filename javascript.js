//Make a let function called computerPlay and the constonnts rock paper and scissor


//Make array of three strings 
    const myArray = [ "rock",  "paper", "scissors"];
    let computerPlay = myArray[Math.floor(Math.random()*3)];
    console.log(computerPlay);
   

let playerchoice = promt ("Let/'s play! Choose rock, paper or scissors");
const playerSelection = playerchoice.toLowerCase;
const computerSelection = computerPlay();
//get user input
function startGame(playerSelection, computerSelection) {
    if playerSelection > computerSelection {
    return ("Player wins")  
    }
    else if playerSelection < computerSelection {
    return ("Computer wins")
    }
    else if playerSelection === computerSelection {
    return ("it/'s a draw!")
    else {
    return ("something went wrong, please play again")
    }
}




    if {
        playerSelection != rock || paper || scissors;
        console.log("Please choose rock paper or scissors");
    }
    if {
        playerSelection === computerPlay;
        console.log("It/'s a draw!");
    }
    if  {
        playerSelection === rock && computerPlay === scissors   
        playerSelection > computerPlay
    }
    if  {
        playerSelection === rock && computerPlay === paper;
        playerSelection < computerPlay
    }
    if {
        playerSelection === scissors && computerPlay === rock;
        playerSelection < computerPlay
    }
    if {
        playerSelection === scissors && computerPlay === paper;
        playerSelection > computerPlay
    }
    if {
        playerSelection === paper && computerPlay === rock;
        playerSelection > computerPlay
    }
    if {
        playerSelection === paper && computerPlay === scissors;
        playerSelection < computerPlay
    }
}
    
    



