import './style.css';
// eslint-disable-next-line no-unused-vars
import postScore from './modules/game.js';

// Event listener to add a score
document.querySelector('#add-score').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('add score listener');
  postScore();
});

// Event listener to show stored scores
document.querySelector('#refresh').addEventListener('click');
