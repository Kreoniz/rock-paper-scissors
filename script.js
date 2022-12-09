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
            score: 0.5
        };
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
    || playerSelection === 'Paper' && computerSelection === 'Rock'
    || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return {
            message: `You Win! ${playerSelection} beats ${computerSelection}`,
            score: 1
        };
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'
    || computerSelection === 'Paper' && playerSelection === 'Rock'
    || computerSelection === 'Scissors' && playerSelection === 'Paper'
    ) {
        return {
            message: `You Lose! ${computerSelection} beats ${playerSelection}`,
            score: 0
        };
    }
}

// Play 5 rounds of the game and announce a winner
function game() {
    let userScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Your turn:');
        const computerSelection = getComputerChoice();
        
        const result = playRound(playerSelection, computerSelection);

        console.log(result.message);
        userScore += result.score;
    }

    if (userScore / 2 > 5 / 2) {
        console.log(`You Win! Your score is ${userScore}`);
    } else if (userScore / 2 < 5 / 2) {
        console.log(`You Lose! Your score is ${userScore}`);
    } else if (userScore / 2 === 5 / 2) {
        console.log(`It's a Tie! Your score is ${userScore}`);
    }
}

game()
