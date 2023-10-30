// Code to write rock paper scissors game
// Delcaring all variables here
let valueOfChoice;
let finalComputerChoice;
let userChoice;
let finalUserChoice;
let userScore = 0;
let computerScore = 0;
let currrentRound = 1;

//Function to choose amongst 3 choices 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to get computer choice

function getComputerChoice(){
    
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

// Function to Get user choice

function getUserChoice()
{

    userChoice = prompt ("Enter your choice")
        
    if (userChoice.toLowerCase() == "rock")
    {
        alert("You chose rock!");
    }
    else if (userChoice.toLowerCase() == "paper")
    {
        alert("You chose paper!");
    }
    else if (userChoice.toLowerCase() == "scissors")
    {
        alert(" You chose scissors!");
    } 
    else    
    {
        alert (" Wrong response, please try again");
        getUserChoice();
    }

}

// Fuction to find winner or draw

function playRound()
{

    if (finalUserChoice == finalComputerChoice){
        alert ("Draw game!");
    }
    else if ((finalUserChoice == "rock" && finalComputerChoice == "scissors")|| 
    (finalUserChoice == "paper" && finalComputerChoice == "rock")||
    (finalUserChoice == "scissors" && finalComputerChoice == "paper"))
    {
        alert("User wins round!");
        userScore++;
    }
    else{
        alert ("Computer wins round");
        computerScore++;
    }

}


function game(){

    //Computer chooses after this
    finalComputerChoice = getComputerChoice(); 
    console.log("Computer chose " + " " + finalComputerChoice);
    //User chooses after this
    getUserChoice();

    finalUserChoice = userChoice.toLowerCase();

    console.log("User chose " + finalUserChoice);
    //Round is played after this
    playRound();
    //Results displayed after this

    alert( "Scores after round " + currrentRound + " : \n User " + userScore +"\n" + " Computer " + computerScore);

    currrentRound++;
}

game();
game();
game();
game();
game();

if (userScore == computerScore){
    alert("Final result is draw!");
}

else if(userScore > computerScore){
    alert("User WINS!");
}

else {
    alert("Computer wins!");
}
