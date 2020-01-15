let currentMove = "X";
let boardState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let totalMoves = 0;

/**
 * Handle visual updates for each square, and internal board state
 **/
function onSquareClick(index) {
  const row = Math.floor(index / 3);
  const column = index % 3;
  const square = document.getElementById(`${index}`);

  square.disabled = true;

  if (currentMove === "X") {
    square.classList.add("X");
    boardState[row][column] = 88; // char code for "X"
  } else if (currentMove === "O") {
    square.classList.add("O");
    boardState[row][column] = 79; // char code for "O"
  }

  totalMoves++;

  if (checkForWinner(row, column)) {
    alert(`${currentMove} has won the game!`);
    location.reload();
  } else if (totalMoves === 9) {
    alert("The game has ended in a tie!");
    location.reload();
  }

  currentMove = currentMove === "X" ? "O" : "X";
}

/**
 * Evaluates the game board to see if there has been a winner.
 **/
function checkForWinner(row, column) {
  const charCode = boardState[row][column];
  return (
    // horizontal check
    (boardState[row][0] === charCode &&
      boardState[row][1] === charCode &&
      boardState[row][2] === charCode) ||
    // vertical check
    (boardState[0][column] === charCode &&
      boardState[1][column] === charCode &&
      boardState[2][column] === charCode) ||
    // left angle check
    (boardState[0][0] === charCode &&
      boardState[1][1] === charCode &&
      boardState[2][2] === charCode) ||
    // right angle check
    (boardState[0][2] === charCode &&
      boardState[1][1] === charCode &&
      boardState[2][0] === charCode)
  );
}
