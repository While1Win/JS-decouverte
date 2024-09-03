// you can write js here
//console.log('exo-3');
function getPlayerChoice(playerInput){
    console.log(playerInput.toLowerCase());

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log("random  = " + getRandomInt(3));
function getComputerChoice(){

    let entier = getRandomInt(3);
    let choix;
    switch (entier) {
        case 0 :
            choix = 'rock';
            break;
        case 1 : 
            choix = 'paper'
            break;
        case 2 : 
            choix = 'scissors';
            break;
        default:
            console.log("error");

    }
    return choix;
}

console.log("computer = " + getComputerChoice());
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");
if (playerInput == 'rock' || playerInput == 'Rock' || playerInput == 'paper' || playerInput =='Paper' || playerInput == 'scissors' || playerInput == 'Scissors'){
    getPlayerChoice(playerInput);
} else {
    console.log("error");
}


function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tied';
    } 
    
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        } 
        return 'Lost';
    } 
    
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        } 
        return 'Lost';
    } 
    
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        } 
        return 'Lost';
    }
    /*if (playerChoice === computerChoice){
        return 'Tied';
    } else if ( playerChoice === 'rock'){
        if (computerChoice === 'scissors'){
            return 'Won';
        } else {
            return'Lost';
        }
    } else if (playerChoice === 'paper'){
        if (computerChoice === 'rock'){
            return 'Won';
        }
        else {
            return 'Lost';
        }
    } else if (playerChoice === 'scissors'){
        if (computerChoice === 'paper'){
            return 'Won';
        } else {
            return 'Lost';
        }
    }*/

}

function playGame() {
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    console.log(findWinner(uChoice,computerChoice));

}
playGame();