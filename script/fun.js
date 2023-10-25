let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();


function playGame(playerMove) 
{
  const computerMove = randompick();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = 
  `you selected
    <img class="res" src="./IMAGES/${playerMove}.png" alt=""><br><br>
    computer selected <img class="res" src="./IMAGES/${computerMove}.png" alt=""> `;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function randompick() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
function htp(){
  alert(`Items: There are three items to choose from 
  *Rock 
  *Paper
  *Scissors
  _____________________________________________________________________
  Rules:
  *Rock beats Scissors 
  *Scissors beats Paper 
  *Paper beats Rock 
  _____________________________________________________________________
  Outcome:
  *If you choose an item that defeats the computer's choice, you win.
  *If the computer's choice defeats yours, you lose.
  *If both you and the computer make the same choice, it's a tie
  ____________________________________________________________________
  How to Play:
  *Simply choose one of the three items (Rock, Paper, or Scissors).
  *The computer will also make its choice.
  *The game will determine the winner based on the rules, and you'll see whether you've won, lost, or tied with the computer.`)
}