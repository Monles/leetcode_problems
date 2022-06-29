const invert = (matrix, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const t = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = t;
    }
  }
};

const flipColumns = (matrix, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const t = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = t;
    }
  }
};

var rotate = function (matrix) {
  const n = matrix.length;
  invert(matrix, n);
  flipColumns(matrix, n);
};
