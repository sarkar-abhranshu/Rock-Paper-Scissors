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