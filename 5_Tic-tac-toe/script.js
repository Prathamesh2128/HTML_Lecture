let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (board[cellIndex] === '' && !checkWinner()) {
    board[cellIndex] = currentPlayer;
    render();
    if (!checkWinner()) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('status').innerText = `Player ${board[a]} wins!`;
      return true;
    }
  }
  if (board.every(cell => cell !== '')) {
    document.getElementById('status').innerText = `It's a draw!`;
    return true;
  }
  return false;
}

function render() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('status').innerText = '';
  render();
}
