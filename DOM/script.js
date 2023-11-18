'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'i am changing the content!';
// document.querySelector('.number').textContent = 'yuhuuu!';
// document.querySelector('.score').textContent = '100%';
// document.querySelector('.guess').value = '5';
// console.log(document.querySelector('.guess').value);

/*

Document Object Model
- THE DOM TREE STRUCTURE
***document.querySelector()
*/
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when no numbers are entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // when player wins
  else if (guess === secretNumber) {
    highScore = score;
    document.querySelector('.message').textContent = 'congratulations';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guessed below the secret number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose, the number was ' + secretNumber;
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Guess is too Low!'
          : 'Guess is too Low, try higher!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose, the number was' + secretNumber;
      document.querySelector('.score').textContent = '0';
    }
  }
  // when guessed above the secret number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Guess is too Low, try higher!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You Lose, the number was' + secretNumber;
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highScore;
});
