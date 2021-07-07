let array = [3, 6, 7, 0, 1, 8, 4, 2, 9, 5];

console.log(array);

const selectionSort = arr => {
  let ar = arr.slice();

  for (let i = 0; i < ar.length - 1; i++) {
    let minIndex = i;
    for (let j = 1 + i; j < ar.length; j++) {
      if (ar[minIndex] > ar[j]) {
        minIndex = j;
      }
    }
    [ar[i], ar[minIndex]] = [ar[minIndex], ar[i]];
  }
  return ar;
};

console.log(selectionSort(array));
console.log(array);