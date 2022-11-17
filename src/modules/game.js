const apiKey = 'gQxRXsSqZhbfITVQg4H7';
const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

const postScore = () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  console.log(name);
  console.log(score);

  fetch(apiUrl, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: score,
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

const displayScores = () => {};

export default postScore;
