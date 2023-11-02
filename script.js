// Code to write rock paper scissors game
// Delcaring all variables here
let valueOfChoice;
let finalComputerChoice;
let userChoice;
let finalUserChoice;
let userScore = 0;
let computerScore = 0;
let currrentRound = 1;

const user = document.querySelector(".user_choice");
const computer = document.querySelector(".computer_choice");
const board = document.querySelector(".board");
const score = document.querySelector(".score");
 

//Function to choose amongst 3 choices 

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to get computer choice

function getComputerChoice()

{
    
    valueOfChoice = getRandomInt(1, 3);

    if (valueOfChoice == 1) {
        return "rock";

    }

    else if (valueOfChoice == 2){
        return "paper";
    }

    else {
        return "scissors";
    }
}

// Function to get user choice by GUI

function getUserChoiceGUI()

{

        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissors = document.querySelector(".scissors");

        rock.addEventListener('click', () => {
            user.innerHTML = "You chose rock";
            // rock.style.transform = "scale(1.2,1.2)";
            // rock.style.transitionDuration = "0.5s";
            // rock.style.transitionDelay = "0.01s";

            //alert("You choose rock");
            userChoice = "rock"; 
            finalUserChoice = userChoice;
            console.log(userChoice);
            game(); 
               

        });

        paper.addEventListener('click', () => {
            user.innerHTML = "You chose paper";
            //alert("You choose paper");
            userChoice = "paper";
            finalUserChoice = userChoice;
            console.log(userChoice);
            game();
            
        });

        scissors.addEventListener('click', () => {
            user.innerHTML = "You chose scissors";
            //alert("You choose scissors");
            userChoice = "scissors";
            finalUserChoice = userChoice;
            console.log(userChoice);
            game();
            
        });

}

getUserChoiceGUI();





// Function to Get user choice by PROMPT

// function getUserChoice()
// {

//     userChoice = prompt ("Enter your choice")
        
//     if (userChoice.toLowerCase() == "rock")
//     {
//         alert("You chose rock!");
//     }
//     else if (userChoice.toLowerCase() == "paper")
//     {
//         alert("You chose paper!");
//     }
//     else if (userChoice.toLowerCase() == "scissors")
//     {
//         alert(" You chose scissors!");
//     } 
//     else    
//     {
//         alert (" Wrong response, please try again");
//         getUserChoice();
//     }

// }

// Fuction to find winner or draw
//***comment out for GUI***

function playRound()

{ 
    
    
    if (finalUserChoice == finalComputerChoice){
        board.innerHTML = "Draw game!";
        //alert ("Draw game!");
    }
    else if ((finalUserChoice == "rock" && finalComputerChoice == "scissors")|| 
    (finalUserChoice == "paper" && finalComputerChoice == "rock")||
    (finalUserChoice == "scissors" && finalComputerChoice == "paper"))
    {
        board.innerHTML = "User wins round!";
        //alert("User wins round!");
        userScore++;
    }
    else{
        board.innerHTML = "Computer wins round";
        //alert ("Computer wins round");
        computerScore++;
    }

}


//***comment out for GUI***
function game()

{

    
    
        //Computer chooses after this
        finalComputerChoice = getComputerChoice();
        computer.innerHTML = "Computer chose " + finalComputerChoice; 
        //alert("Computer chose " + " " + finalComputerChoice);
        //User chooses after this
        //getUserChoice();

        //No need for GUI as called based on click
        //finalUserChoice = userChoice.toLowerCase();

        //console.log("User chose " + finalUserChoice);
        //Round is played after this
        playRound();
        //Results displayed after this

        score.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp SCORES <br>" + 
        " &nbsp &nbsp &nbsp &nbsp &nbsp ROUND" + "&nbsp" + currrentRound + " <br> User" 
        + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" 
        + userScore + "<br>" + "Computer" 
        + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " 
        + computerScore
        //alert( "Scores after round " + currrentRound + " : \n User " + userScore +"\n" + " Computer " + computerScore);
        
        
        if(currrentRound == 3)
              
        {

            if (userScore == computerScore)
            {
                score.innerHTML = "Final result is draw!"; 
                //alert("Final result is draw!");
                return
            }

            else if(userScore > computerScore)
            {
                score.innerHTML = "Final result: User WINS!";
                //alert("Final result: User WINS!");
                return
            }

            else {
                score.innerHTML = "Final result: Computer wins!";
                //alert("Final result: Computer wins!");
                return     
            }
        }

        currrentRound++;
    


}

//No need for GUI
//game();

// ***comment out for GUI***
// if (userScore == computerScore){
//     alert("Final result is draw!");
// }

// else if(userScore > computerScore){
//     alert("User WINS!");
// }

// else {
//     alert("Computer wins!");
// }
