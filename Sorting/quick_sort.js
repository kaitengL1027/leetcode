let array = [3, 6, 7, 0, 1, 8, 4, 2, 9, 5, 0, 0, 9, 0, 9, -5, 5, 45, 4, 4, 4, 8, 0.1515];

console.log(array);

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let ptr = 0;
  let pivot = arr[arr.length - 1];
  let smallArr = [];
  let bigArr = [];
  
  while (ptr < arr.length - 1) {
    if (arr[ptr] < pivot) {
      smallArr.push(arr[ptr]);
    } else {
      bigArr.push(arr[ptr]);
    }
    ptr++;
  }
  return [ ...quickSort(smallArr), pivot, ...quickSort(bigArr)];
};

console.log(quickSort(array));
console.log(array);