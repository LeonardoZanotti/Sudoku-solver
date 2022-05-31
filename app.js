const puzzleBoard = document.querySelector('#puzzle');
const solveBtn = document.querySelector('#solve-btn');
const squares = 9;

for (let i = 0; i < squares * squares; i++) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('min', 1);
  inputElement.setAttribute('max', 9);
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll('input');
  let valuesArray = [];
  const valuesBoard = [];
  inputs.forEach((input, i) => {
    valuesArray.push(input.value ? input.value : '.');
    if ((i + 1) % squares === 0) {
      valuesBoard.push(valuesArray);
      valuesArray = [];
    }
  });
  return valuesBoard;
};

const solveSudoku = () => {
  const board = joinValues();
  return { solvable: true, solution: '' };
};

solveBtn.addEventListener('click', solveSudoku);
