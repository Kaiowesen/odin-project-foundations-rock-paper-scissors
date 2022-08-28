


    
const myArray = [ "rock",  "paper", "scissors"];
const winners = [];
let playerWins = [];
let computerWins = [];
let drawsArray = [];
let playerSelect = "";
let resultDiv = document.getElementById("divR")
let rounDiv = document.getElementById("divC")
let counter = 0;

    
//gets random input from computer
function computerChoice () {
   
    return myArray[Math.floor(Math.random() * myArray.length)];
}






//function to check who wins and prints result
function checkResult (playerSelection,computerSelection) {
     if (playerSelection == computerSelection) return ("draw");
    else if  (playerSelection == "rock" && computerSelection == "scissors")  return ("player");
    else if (playerSelection == "scissors" && computerSelection == "paper") return ("player");
    else if (playerSelection == "paper" && computerSelection == "rock") return ("player");
    else return ("computer");
    
}





function finalScore (winP,winC) {
        if ((winP.length + winC.length + drawsArray.length) == 5 && winP.length > winC.length) {
            alert("Game over Final result is Player " + winP.length + " Computer " + winC.length +  " player wins! refresh page to play again")
            stop();
            
        } 
   

         else if ((winP.length + winC.length + drawsArray.length) == 5 && winC.length > winP.length) {
            alert("Game over Final result is Computer " + winC.length + ", player " + winP.length + " and draws " + drawsArray.length + " computer wins! refresh page to play again")
            stop();
        }
        else if ((winP.length + winC.length + drawsArray.length) == 5 && winC.length == winP.length) {
            alert("The score is computer " + winC.length + ", player " + winP.length + " and draws " + drawsArray.length + " It\'s a draw! refresh page to play again")
            stop();
        }
        else if (winC.length && winP.length == null)   {
            alert("The score is computer 0 and Player 0. It/'s a draw!")
        }

         else {
            resultDiv.textContent = "The score is computer " + winC.length + ", player " + winP.length + " and draws " + drawsArray.length;
        }
}



       const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button) => {

            // and for each one we add a 'click' listener
            button.addEventListener('click', () => {
                playerSelect = (button.id)
                counter++;
                if (counter < 6){
                    playRound();    
                    finalScore(computerWins, playerWins);
                }
              
            });
        });
           
       
          

//function to play one round and announce winner
function playRound() {
    const computerSelection = computerChoice();
    const winner = checkResult(playerSelect, computerSelection);
    rounDiv.textContent = " player chooses " + playerSelect + " and computer chooses " + computerSelection;
    winners.push(winner);
    playerWins = winners.filter(function(item) {
        return (item == "player");
        });
    computerWins = winners.filter(function(item) {
        return (item == "computer");
        });
    drawsArray = winners.filter(function(item) {
        return (item == "draw");
        });

 }