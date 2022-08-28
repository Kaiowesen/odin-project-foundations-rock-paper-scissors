


    
const myArray = [ "rock",  "paper", "scissors"];
const winners = [];
let playerWins = [];
let computerWins = [];
let drawsArray = [];
let playerSelect = "";
let resultDiv = document.getElementById("divR")
let rounDiv = document.getElementById("divC")
let counter = 0;
/*function game () {
    for (let i = 0; i < 5; i++) {
        playRound();
        roundScore(winners[winners.length-1]);
        
     };
     finalScore(playerWins, computerWins)
}
*/
    
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

/*function validationCheck (answer) {
   let _answer = answer
   while (answer == null) {
    answer = prompt ("Choose rock, paper or scissors");
   }
   answer = answer.toLowerCase();
    while (answer != "rock" && answer != "paper" && answer != "scissors")  {
       answer = prompt ("Choose rock, paper or scissors, spelling needs to be excact! Please play again!");
    } 
   return answer;
 };
 */



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

    /*function roundScore (roundScore) {
        if (roundScore == "player") {
            console.log("player wins round")
        }
        else if (roundScore == "computer") {
            console.log("computer wins round")
        }
        else if (roundScore == "draw") {
                console.log("It\'s a draw!");
            }
        }*/

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
           
            //playRound();
            //finalScore(computerWins, playerWins);
            //});
    
          

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