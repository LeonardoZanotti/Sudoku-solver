const puzzleBoard = document.querySelector('#puzzle');
const solveBtn = document.querySelector('#solve-btn');
const squares = 81;
require('dotenv').config();
console.log(process.env.apiKey);
for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('min', 1);
  inputElement.setAttribute('max', 9);
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll('input');
  const valuesArray = [];
  inputs.forEach((input) => valuesArray.push(input.value ? input.value : '.'));
  console.log(valuesArray);
  return valuesArray.join('');
};

const solveByApi = () => {
  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
      'X-RapidAPI-Key': '',
    },
    data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}',
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
solveBtn.addEventListener('click', joinValues);
