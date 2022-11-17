const apiKey = 'gQxRXsSqZhbfITVQg4H7';
const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

const postScore = () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  fetch(apiUrl, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

const displayScores = () => {
  async function fetchScores() {
    const scores = document.querySelector('#scores-table');
    scores.innerHTML = '';
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.result.forEach((addedScore) => {
      scores.innerHTML += `
                <div class="score">${addedScore.user}: ${addedScore.score}</div>`;
    });
  }
  fetchScores();
};

export { postScore, displayScores };
