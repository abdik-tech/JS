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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'congratulations';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose, the number was ' + secretNumber;
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Guess is too Low, try higher!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose, the number was' + secretNumber;
      document.querySelector('.score').textContent = '0';
    }
  }
});
