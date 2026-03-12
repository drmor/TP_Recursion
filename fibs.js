function fibs(n) {
  let arr = [0, 1];
  while (arr.length < n) {
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  return arr;
}
module.exports = fibs;
