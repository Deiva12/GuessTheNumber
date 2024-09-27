'use strict';

let actualvalue = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check-btn').addEventListener('click', function () {
  const guessval = Number(document.querySelector('.inputnumber').value);
  if (guessval > 20) {
    document.querySelector('.changingval').textContent =
      ' ⛔ Enter Number between 0 to 20 ... ';
  } else {
    if (score > 1) {
      if (!guessval) {
        document.querySelector('.changingval').textContent =
          ' ⛔ Not a Number ';
      } else if (guessval === actualvalue) {
        document.querySelector('.changingval').textContent =
          ' 🎉 Correct Answer ! ';
        document.querySelector('body').style.backgroundColor = '#389844';
        document.querySelector('.inputnumber').style.backgroundColor =
          '#389844';
        document.querySelector('.again').style.backgroundColor = '#389844';
        document.querySelector('.check-btn').style.backgroundColor = '#389844';
        document.querySelector('.valueshow').style.backgroundColor = '#389844';
        document.querySelector('.valueshow').style.width = '125px';

        document.querySelector('.valueshow').textContent = actualvalue;
        if (score > highscore) {
          document.querySelector('.spanhighscore').textContent = score;
        }
      } else if (guessval > actualvalue) {
        document.querySelector('.changingval').textContent =
          ' 📉 Higher than the actual ! ';
        score--;
      } else if (guessval < actualvalue) {
        document.querySelector('.changingval').textContent =
          ' 📈 Lower than the actual ! ';
        score--;
      }
      document.querySelector('.spanscore').textContent = score;
    } else {
      document.querySelector('.changingval').textContent =
        ' 💀 you have lost the game .... ';
      document.querySelector('.spanscore').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.inputnumber').style.backgroundColor = 'red';
      document.querySelector('.again').style.backgroundColor = 'red';
      document.querySelector('.check-btn').style.backgroundColor = 'red';
      document.querySelector('.valueshow').style.backgroundColor = 'red';
      document.querySelector('.valueshow').style.width = '125px';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.changingval').textContent = ' Start Guessing ... ';
  document.querySelector('.spanscore').textContent = 20;
  document.querySelector('body').style.backgroundColor = 'rgb(2, 7, 40)';
  document.querySelector('.inputnumber').style.backgroundColor =
    'rgb(2, 7, 40)';
  document.querySelector('.again').style.backgroundColor = 'rgb(2, 7, 40)';
  document.querySelector('.check-btn').style.backgroundColor = 'rgb(2, 7, 40)';
  document.querySelector('.valueshow').style.backgroundColor = 'rgb(2, 7, 40)';
  document.querySelector('.valueshow').style.width = '100px';
  document.querySelector('.valueshow').textContent = '?';
  document.querySelector('.inputnumber').value = '';
  actualvalue = Math.floor(Math.random() * 20) + 1;
  score = 20;
});
