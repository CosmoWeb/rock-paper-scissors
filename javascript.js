console.log("Hello World!");

function getComputerChoice(randomNumber){
    let choice;
    randomNumber = generateNumber();

    if(randomNumber === 1){
        choice = "rock";
    }else if(randomNumber === 2){
        choice = "paper"
    }else if(randomNumber === 3){
        choice = "scissors";
    }
    return console.log(choice);
}

function generateNumber(){
    return Math.floor(Math.random() * 3) +1;
}

getComputerChoice();