function mergeSort(arr) {
  if (arr.length == 1 || arr.length == 0) {
    return arr;
  }
  const middleIndex = Math.ceil(arr.length / 2);
  const leftSide = arr.slice(0, middleIndex);
  const rightSide = arr.slice(middleIndex);
  const sortedLeft = mergeSort(leftSide);
  const sortedRight = mergeSort(rightSide);
  return merge(sortedLeft, sortedRight);
}
function merge(right, left) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      newArr.push(right[j]);
      j++;
    } else {
      newArr.push(left[i]);
      i++;
    }
  }
  newArr = newArr.concat(left.slice(i));
  newArr = newArr.concat(right.slice(j));
  return newArr;
}

module.exports = mergeSort;
