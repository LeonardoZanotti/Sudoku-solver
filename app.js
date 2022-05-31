const puzzleBoard = document.querySelector('#puzzle');
const solveBtn = document.querySelector('#solve-btn');
const squares = 81;

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

solveBtn.addEventListener('click', joinValues);
