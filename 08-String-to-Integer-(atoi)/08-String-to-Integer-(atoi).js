const myAtoi = (str) => {
  let trimmed = str.trim();
  let parsed = parseInt(trimmed, 10);

  if (isNaN(parsed)) {
    return 0;
  } else if (parsed >= Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (parsed <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else {
    return parsed;
  }
};
