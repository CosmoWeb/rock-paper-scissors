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
    return computerChoice;
}

function generateNumber(){
    return Math.floor(Math.random() * 3) +1;
}

const resultContainer = document.querySelector("#result");
const result = document.createElement('p');
const yourScore = document.createElement('p');
const cpuScore = document.createElement('p');
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
 
    if(humanChoice === "rock" && computerChoice === "scissors"){
        result.textContent = "You win! Rock beats scissors \r\n";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        humanScore+=1;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        result.textContent = "You win! Scissors beats paper";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        humanScore+=1;
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        result.textContent = "You win! Paper beats rock";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        humanScore+=1;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        result.textContent = "You lose :( Rock beats scissors";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        computerScore+=1;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        result.textContent = "You lose :( Scissors beats paper";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        computerScore+=1;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        result.textContent = "You lose :( Paper beats rock";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        computerScore+=1;
    }else if(humanChoice === computerChoice){
        result.textContent = "You're even!";
        yourScore.textContent = " Your score: " + humanScore;
        cpuScore.textContent = "CPU score: " + computerScore;
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
    }else{
        result.textContent = "Something was wrong";
        resultContainer.appendChild(result);
    }

    if(humanScore == 5){
        result.textContent = "You won the game!";
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        humanScore = 0;
        computerScore = 0;
        }else if(computerScore == 5){
        result.textContent = "You lost the game :C";
        resultContainer.appendChild(result);
        resultContainer.appendChild(yourScore);
        resultContainer.appendChild(cpuScore);
        humanScore = 0;
        computerScore = 0;
        }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e)=>{
        const target = e.target;
        humanChoice = target.id;
        computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
        
    });
})
