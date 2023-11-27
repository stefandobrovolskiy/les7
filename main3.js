const { mergeSort } = require('./main2.js');

function sliceArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const firstSideArr = arr.slice(0, middle);
  const secondPartArr = arr.slice(middle);

  return mergeSort(sliceArr(firstSideArr), sliceArr(secondPartArr));
}

module.exports = { sliceArr };
