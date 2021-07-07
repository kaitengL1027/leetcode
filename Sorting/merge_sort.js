let array = [3, 6, 7, 0, 1, 8, 4, 2, 9, 5];

console.log(array);

const mergeSortedArray = (leftArr, rightArr) => {
  let leftPtr = 0;
  let rightPtr = 0;
  let mergedArr = [];

  while (leftPtr < leftArr.length && rightPtr < rightArr.length) {
    if (leftArr[leftPtr] <= rightArr[rightPtr]) {
      mergedArr.push(leftArr[leftPtr]);
      leftPtr++;
    } else {
      mergedArr.push(rightArr[rightPtr]);
      rightPtr++;
    }
  }
  return [ ...mergedArr, ...leftArr.slice(leftPtr), ...rightArr.slice(rightPtr)];
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return mergeSortedArray(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort(array));
console.log(array);