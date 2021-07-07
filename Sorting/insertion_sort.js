let array = [3, 6, 7, 0, 1, 8, 4, 2, 9, 5];

console.log(array);

const insertionSort = arr => {
  let ar = arr.slice();
  for (let i = 1; i < ar.length; i++) {
    for (let j = i; j > 0; j--) {
      if (ar[j] < ar[j - 1]){
        [ar[j], ar[j - 1]] = [ar[j - 1], ar[j]];
      } else {
        break;
      }
    }
  }
  return ar;
};

console.log(insertionSort(array));
console.log(array);