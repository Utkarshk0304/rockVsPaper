const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
function userInput() {
    const selectInput = prompt('Enter ROCK, PAPER or SCISSORS').toUpperCase();
    if (selectInput !== ROCK && selectInput !== PAPER && selectInput !== SCISSORS) {
        alert('invalid input we chose rock for you');
        return ROCK;
    }
    return selectInput;
}

function computerInput() {
    const cInput = Math.random();
    if (cInput < 0.33) {
        return ROCK;
    } else if (cInput < 0.66) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}
const whoWins = function (pInput, cInput) {
    if (pInput===cInput) {
        return ('draw');
    }
    else if (pInput === SCISSORS && cInput === PAPER ||
        pInput === ROCK && cInput === SCISSORS ||
        pInput === PAPER && cInput === ROCK ) {
        return ('player won!');
    }else{
        return ('computer won');
    }
}



let gameStarted = false;
startGameBtn.addEventListener('click', function () {
    if (gameStarted) {
        return;
    }
    gameStarted = true;
    const playerInputIs = userInput();
    const computerInputIs = computerInput();
    const winner= whoWins(playerInputIs,computerInputIs);
    console.log(winner);
    let message="you picked "+playerInputIs+ " and the computer picked "+computerInputIs+" hence the result is ";
    if (winner==='draw') {
        message=message+"draw";
    }else if(winner==='player won!'){
        message=message+'YOU WON!';
    }else{
        message=message+'COMPUTER WON';
    }
    alert(message);
    gameStarted=false;
})






