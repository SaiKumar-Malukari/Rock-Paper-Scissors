function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  
  if(randomNumber >= 0.5 && randomNumber < 1/3){
    computerMove = 'Rock'
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper'
  } else if(randomNumber >=2/3 && randomNumber <=1){
    computerMove = 'Scissors'
  }
  return computerMove;
}

let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
}
updateScore();

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Rock'){
    if(computerMove === 'Rock'){
      result = 'Tie.'
    } else if (computerMove === 'Paper'){
      result = 'You Lose.'
    } else if (computerMove === 'Scissors'){
      result = 'You Win.'
    }
  } else if(playerMove === 'Paper'){
     if (computerMove === 'Rock'){
      result = 'You Win.'
     } else if (computerMove === 'Paper'){
      result = 'Tie.'
     } else if (computerMove === 'Scissors'){
      result = 'You Lose.'
     }
  } else if (playerMove === 'Scissors'){
     if (computerMove === 'Rock'){
      result = 'You Lose.'
     } else if (computerMove === 'Paper'){
      result = 'You Win.'
     } else if (computerMove === 'Scissors'){
      result = 'Tie.'
     }
  }

  if (result === 'You Win.'){
    score.Wins ++;
  } else if (result === 'You Lose.'){
    score.Losses ++;
  } else if (result === 'Tie.'){
    score.Ties ++;
  }
  
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
   <img src="Images/${playerMove}-emoji.png" class = "move-icon"> 
   Computer <img src="Images/${computerMove}-emoji.png" class = "move-icon">`

  updateScore();
  console.log(computerMove);
  
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins} Losses : ${score.Losses} Ties : ${score.Ties}`;
}