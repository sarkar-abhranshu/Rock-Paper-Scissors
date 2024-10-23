let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random()*100) + 1;
    let choice;
    if(num < 33){
        choice = "rock";
    }
    else if(num > 33 && num < 66){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}
function getHumanChoice() {
    let hChoice = prompt("Choose between rock, paper and scissors:");
    return hChoice;
}
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log(`Draw! Both drew ${humanChoice}.`);
    }
    else if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
function playGame() {
    let round = 1;
    while(round <= 5){
        let huChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        playRound(huChoice, compChoice);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
        round++;
    }
    console.log("Game over!");
    if(humanScore > computerScore) {
        console.log(`You win!`);
    }
    else if(humanScore < computerScore) {
        console.log(`You lose!`);
    }
    else {
        console.log(`Draw!`)
    }
    console.log(`Final Score:\nHuman: ${humanScore}, Computer: ${computerScore}`)
}

playGame();