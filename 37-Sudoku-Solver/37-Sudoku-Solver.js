const solveSudoku = (board) => {
  if (!board || board.length == 0) {
    return;
  }
  Result(board);
};

const Result = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c.toString())) {
            board[i][j] = c.toString();
            if (Result(board)) {
              return true;
            } else {
              board[i][j] == '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

const isValid = (board, row, col, c) => {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == c) return false;
    if (board[row][i] == c) return false;
  }
  const x = ~~(row / 3) * 3;
  const y = ~~(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] == c) {
        return false;
      }
    }
  }
  return true;
};
