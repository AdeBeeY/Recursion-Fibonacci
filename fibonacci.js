function fibs(n) {
  if(n == 0 ) {
    return [];
  } else if ( n == 1 ) {
    return [0];
  }
  let arr = [0, 1];
  for (let i = 1; i <= n - 2; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

console.log(fibs(8))
console.log(fibs(20))

  // Solve Recursively
function fibsRec(n) {
  if (n == 0 ) {
    return [];
  }
  if (n == 1 ) {
    return [0];
  }
   if (n == 2 ) {
    return [0, 1];
   }
   let arr = fibsRec(n - 1);
   arr.push(arr[arr.length - 1] + arr[arr.length - 2])
   return arr;
}

console.log(fibsRec(8));
console.log(fibsRec(20));