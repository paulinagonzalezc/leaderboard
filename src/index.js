import './style.css';
import { postScore, displayScores } from './modules/game.js';

// Event listener to add a score
document.querySelector('#add-score').addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});

// Event listener to show stored scores on click of refresh
document.querySelector('#refresh').addEventListener('click', () => {
  displayScores();
});

// Event listener to show stored scores on page refresh
document.addEventListener('DOMContentLoaded', displayScores());
