// let rock = 0;
// let paper = 1;
// let scissors = 2;

let compScore = 0;
let playerScore = 0;
let tieScore = 0;

let winElement = document.getElementById("winner");

let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorsElement = document.getElementById("scissors");

// Computer Score

let destCompScore = document.getElementById("compSc");
destCompScore.innerHTML = "Computer Wins: " + compScore;

// Player Score

let destPlayerScore = document.getElementById("playSc");
destPlayerScore.innerHTML = "Player Wins: " + playerScore;

// Tie Score

let destinationTie = document.getElementById("tie");
destinationTie.innerHTML = "Ties: " + tieScore;



handleClick = function (event) {

    var cell = event.target;
    var number = Math.floor((Math.random() * 3));
    
    checkWinner();

    function checkWinner() {

        if (cell === rockElement && number === 1) {
            winElement.innerHTML = "Computer Chooses Paper. You Lose.";
            
            compScore++;
            destCompScore.innerHTML = "Computer Wins: " + compScore;


        } else if (cell === rockElement && number === 2) {
            winElement.innerHTML = "Computer Chooses Scissors. You Win!";
            
            playerScore++;
            destPlayerScore.innerHTML = "Player Wins: " + playerScore;


        } else if (cell === paperElement && number === 0) {
            winElement.innerHTML = "Computer Chooses Rock. You Win!";
            playerScore++;
            destPlayerScore.innerHTML = "Player Wins: " + playerScore;


        } else if (cell === paperElement && number === 2) {
            winElement.innerHTML = "Computer Chooses Scissors. You Lose.";
            compScore++;
            destCompScore.innerHTML = "Computer Wins: " + compScore;

        } else if (cell === scissorsElement && number === 0) {
            winElement.innerHTML = "Computer Chooses Rock. You Lose.";
            compScore++;
            destCompScore.innerHTML = "Computer Wins: " + compScore;

        } else if (cell === scissorsElement && number === 1) {
            winElement.innerHTML = "Computer Chooses Paper. You Win!";
            playerScore++;
            destPlayerScore.innerHTML = "Player Wins: " + playerScore;

        } else {
            winElement.innerHTML = "Tie";
            tieScore++;
            destinationTie.innerHTML = "Ties: " + tieScore;

        }
    }
}


var cells = document.querySelectorAll("img");

for (var i = 0; i < 3; i++) {
    cells[i].addEventListener('click', handleClick);
}