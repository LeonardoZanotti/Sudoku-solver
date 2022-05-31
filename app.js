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

const populateValues = (result) => {
  const inputs = document.querySelectorAll('input');
  if (result.solvable) {
    let row = 0,
      col = 0;
    inputs.forEach((input) => {
      input.value = result.solution[row][col++];
      if (col > squares - 1) {
        row++;
        col = 0;
      }
    });
  }
};

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

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

function sudokuSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (sudokuSolver(data)) {
              return true;
            } else {
              data[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

const solveSudoku = () => {
  const board = joinValues();
  const result = sudokuSolver(board) ? { solvable: true, solution: board } : { solvable: false };
  console.log(result);
  populateValues(result);
};

solveBtn.addEventListener('click', solveSudoku);
