let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100) + 1;
    let choice;
    if (num < 33) {
        choice = "rock";
    } else if (num > 33 && num < 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper") ||
               (humanChoice === "rock" && computerChoice === "scissors")) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function playGame() {
    const body = document.querySelector('body');
    
    const bt1 = document.createElement('button');
    const bt2 = document.createElement('button');
    const bt3 = document.createElement('button');

    bt1.textContent = 'Rock';
    bt2.textContent = 'Paper';
    bt3.textContent = 'Scissors';

    body.appendChild(bt1);
    body.appendChild(bt2);
    body.appendChild(bt3);

    const div = document.createElement('div');
    body.appendChild(div);

    function handleRound(humanChoice) {
        const compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
        div.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore + computerScore >= 5) {
            if (humanScore > computerScore) {
                div.textContent += `\nYou win!`;
            } else if (humanScore < computerScore) {
                div.textContent += `\nYou lose!`;
            } else {
                div.textContent += `\nDraw!`;
            }
            div.textContent += `\nFinal Score:\nHuman: ${humanScore}, Computer: ${computerScore}`;
        }
    }

    bt1.addEventListener('click', () => handleRound('rock'));
    bt2.addEventListener('click', () => handleRound('paper'));
    bt3.addEventListener('click', () => handleRound('scissors'));
}

playGame();
