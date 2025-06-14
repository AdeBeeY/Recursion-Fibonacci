export { mergeSort }

function mergeSort(array) {
  if(array.length <= 1) {
    return array
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i])
      i++;
    } else {
      result.push(right[j])
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let task1 = [3, 2, 1, 13, 8, 5, 0, 1];
let task2 = [105, 79, 100, 110];

console.log(`MergeSort result for task 1: ${mergeSort(task1)}`);
console.log(`MergeSort result for task 2: ${mergeSort(task2)}`);