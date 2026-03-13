function fibs(n) {
  let arr = [0, 1];
  while (arr.length < n) {
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  return arr;
}

function fibsRec(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
}

module.exports = { fibs, fibsRec };
