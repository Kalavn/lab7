'use strict';

/* 
- random secretNumber [ok]
- Click Event on Button
- Get value of input => guess value
- compare guess and secretNumber
  + if guess > secretNumber => too high
  + if guess < secretNumber => too low
  + if guess = secretNumber => win (body green background)
- score-- each doing guess, if score == 0 => You lose
- if score > highest score => highest score = score
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//const secretNumber = 12;
let score = 20;
let highestScore = 0;
//reset game function
const resetGame = function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};
//click again button
document.querySelector('.again').addEventListener('click', resetGame);

//Click Event button
document.querySelector('.check').addEventListener('click', function () {
  //Get input number
  const guessNumber = document.querySelector('.guess').value;
  //check right input data from 1 - 20
  if (guessNumber < 1 || guessNumber > 20) {
    document.querySelector('.message').textContent = 'Between 1 and 20';
    document.querySelector('body').style.backgroundColor = '#222';
  } else if (guessNumber < secretNumber) {
    //compare numbers
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😩 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber > secretNumber) {
    //compare numbers
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😩 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    //found right number
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🔥 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highestScore < score) {
      //get highest score
      highestScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.score').textContent = score;
  }
});
