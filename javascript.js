


    
const myArray = [ "rock",  "paper", "scissors"];
const winners = [];
let playerWins = [];
let computerWins = [];
let drawsArray = [];
    
function game () {
    i=playRound();
    for (let i = 1; i < 5; i++) {
        playRound();
        console.log(winners);  
     };
}
    


 //gets input from user, missing 
function playerChoice () {
    let input = prompt ("Let/'s play! Choose rock, paper or scissors");
    input = validationCheck(input);
    return input;
}



//gets random input from computer
function computerChoice () {
   
    return myArray[Math.floor(Math.random() * myArray.length)];
}

//function to play one round and announce winner
function playRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
   const winner = checkResult(playerSelection, computerSelection);
   winners.push(winner)
   playerWins = winners.filter(function(item) {
    return (item == "player");
    });
    computerWins = winners.filter(function(item) {
    return (item == "computer");
    });
  drawsArray = drawsArray = winners.filter(function(item) {
    return (item == "draw");
    });
};




//function to check who wins and prints result
function checkResult (playerSelection,computerSelection) {
     if (playerSelection == computerSelection) {
        return ("draw");
    }
    else if  (playerSelection == "rock" && computerSelection == "scissors") {  
        return ("player");
    }
    else if  (playerSelection == "rock" && computerSelection == "paper") {
        return ("computer");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return ("computer");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("player");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("player");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("computer");
    }
    else {
    return ("something went wrong, please play again");
    }
}

function validationCheck (answer) {
   let _answer = answer
   answer = answer.toLowerCase();
    while (answer != "rock" && answer != "paper" && answer != "scissors")  {
       answer = prompt ("Choose rock, paper or scissors, spelling needs to be excact! Please play again!");
    } 
   return answer;
 };

 function roundScore (roundWinner) {
    if (roundWinner == "player") {
        console.log("player wins round")
    }
    else if (roundWinner == "computer") {
        console.log("computer wins round")
    }
    else if (roundWinner == "draw") {
            console.log("It/'s a draw!");
        }

 }
 
 game();