function fibs(n) {
  let arr = [0, 1];
  for (let i = 1; i <= n - 2; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

console.log(fibs(8))

// OR
// function fibs(n) {
//   let arr = [0, 1];
//   for (let i = 1; i <= n - 2; i++) {
//     let secondToLast = arr[arr.length - 2];
//     let lastItem = arr[arr.length - 1];
//     let summedValue = secondToLast + lastItem;
//     arr.push(summedValue);
//   }
//   console.log(arr.length);
//   return arr;
// }