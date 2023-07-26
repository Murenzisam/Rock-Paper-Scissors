const buttons = document.querySelectorAll('.btn');
const playerScoreText = document.getElementById('player-score');
const compScoreText = document.getElementById('comp-score');
const outputText = document.getElementById('output');

let playerScore = 0;
let compScore = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return "You win this round!";
  } else {
    compScore++;
    return "Computer wins this round!";
  }
}

function updateScore() {
  playerScoreText.textContent = `Player Score: ${playerScore}`;
  compScoreText.textContent = `Computer Score: ${compScore}`;

  if (playerScore >= 5) {
    outputText.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (compScore >= 5) {
    outputText.textContent = "Computer wins the game! Better luck next time.";
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerSelection = this.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    outputText.textContent = result;
    updateScore();
  });
});
