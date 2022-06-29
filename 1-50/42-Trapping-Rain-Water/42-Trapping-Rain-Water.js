var trap = function (array) {
  let leftArray = new Array(array.length).fill(0);
  let left = 0;

  for (let i = 0; i < array.length; i++) {
    const height = array[i];
    leftArray[i] = left;
    left = Math.max(left, height);
  }

  let right = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    const height = array[i];
    const minHeight = Math.min(leftArray[i], right);

    if (height < minHeight) {
      leftArray[i] = minHeight - height;
    } else {
      leftArray[i] = 0;
    }

    right = Math.max(right, height);
  }

  return leftArray.reduce((a, b) => a + b, 0);
};
