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
    computerChoice.toLowerCase;
    console.log(computerChoice);
    return computerChoice;
}

function generateNumber(){
    return Math.floor(Math.random() * 3) +1;
}

function getHumanChoice(){
    message = "Rock, paper or scissors?";
    let humanChoice = prompt(message);
    humanChoice.toLowerCase;
    console.log(humanChoice);
    return humanChoice;
}

function playRound(computerChoice, humanChoice){
    
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors");
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper");
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock");
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose :( Rock beats scissors");
        computerScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose :( Scissors beats paper")
        computerScore++;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose :( Paper beats rock");
        computerScore++
    }else if(humanChoice === computerChoice){
        console.log("You're even!");
    }else{
        console.log("Something was wrong");
    }
    console.log("Your score: " + humanScore);
    console.log("CPU score: " + computerScore);
}



function playGame(){

    humanScore = 0;
    computerScore = 0;

    let humanInput = getHumanChoice();
    let computerOutput = getComputerChoice();
    playRound(computerOutput, humanInput);

    humanInput = getHumanChoice();
    computerOutput = getComputerChoice();
    playRound(computerOutput, humanInput);

    humanInput = getHumanChoice();
    computerOutput = getComputerChoice();
    playRound(computerOutput, humanInput);

    humanInput = getHumanChoice();
    computerOutput = getComputerChoice();
    playRound(computerOutput, humanInput);

    humanInput = getHumanChoice();
    computerOutput = getComputerChoice();
    playRound(computerOutput, humanInput);

    if(humanScore > computerScore){
        console.log("You won the game!");
    }else if(humanScore < computerScore){
        console.log("You lost the game :C");
    }
}


playGame();