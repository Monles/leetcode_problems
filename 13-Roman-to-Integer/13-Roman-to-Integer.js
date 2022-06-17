var romanToInt = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let skipIndex;

  return s.split("").reduce((acc, numeral, index, arr) => {
    const currentCharValue = legend[numeral];
    const nextCharValue = legend[arr[index + 1]];

    if (index === skipIndex) return acc;

    if (nextCharValue > currentCharValue) {
      skipIndex = index + 1;
      return acc + nextCharValue - currentCharValue;
    }

    return acc + currentCharValue;
  }, 0);
};
