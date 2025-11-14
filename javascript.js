console.log("Hello World!");

function getComputerChoice(randomNumber){
    let computerChoice;
    randomNumber = generateNumber();

    if(randomNumber === 1){
      computerChoice = "rock";
    }else if(randomNumber === 2){
        computerChoice = "paper"
    }else if(randomNumber === 3){
        computerChoice = "scissors";
    }
    return console.log(computerChoice);
}

function generateNumber(){
    return Math.floor(Math.random() * 3) +1;
}

function getHumanChoice(){
    message = "Rock, paper or scissors?";
    let humanChoice = prompt(message);
    console.log(humanChoice);
    return humanChoice.toLowerCase;
}

humanScore = 0;
computerScore = 0;

getHumanChoice();