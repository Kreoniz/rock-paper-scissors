// Random computer's turn for rock-paper-scissors
function getComputerChoice() {
    const turns = ['Rock', 'Paper', 'Scissors'];

    const randomIndex = Math.floor(Math.random() * turns.length);
    return turns[randomIndex];
}

// Play one round of the rock-paper-scissors game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return {
            message: `It's a Tie! You both picked ${playerSelection}`,
            score: {'computer': 0, 'player': 0}
        };
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
    || playerSelection === 'Paper' && computerSelection === 'Rock'
    || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return {
            message: `You Win! ${playerSelection} beats ${computerSelection}`,
            score: {'computer': 0, 'player': 1}
        };
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'
    || computerSelection === 'Paper' && playerSelection === 'Rock'
    || computerSelection === 'Scissors' && playerSelection === 'Paper'
    ) {
        return {
            message: `You Lose! ${computerSelection} beats ${playerSelection}`,
            score: {'computer': 1, 'player': 0}
        };
    }
}

const choices = document.querySelectorAll('.choice');
const results = document.querySelector('#results');
const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');
const winnerAnnouncement = document.querySelector('#winnerAnnouncement');
const playAgain = document.querySelector('#playAgain');
let playing = true;

choices.forEach(choice => {
    choice.addEventListener('click', makeMove);
});

function makeMove(event) {
    if (playing) {
        const outcome = playRound(event.target.getAttribute('data-choice'), getComputerChoice());
        results.textContent = outcome.message
        computerScore.textContent = +computerScore.textContent + outcome.score.computer
        playerScore.textContent = +playerScore.textContent + outcome.score.player
        
        if (computerScore.textContent == 5) {
            playing = false;
            winnerAnnouncement.textContent = "The silicon genius wins! AI is unrivaled!";
        } else if (playerScore.textContent == 5) {
            playing = false;
            winnerAnnouncement.textContent = "Triumph of thought! The mighty human wins!";
        }
    }
}

function resetGame() {
    playing = true;
    winnerAnnouncement.textContent = "";
    results.textContent = "The results are yet to be announced!";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
}

playAgain.addEventListener('click', resetGame);
