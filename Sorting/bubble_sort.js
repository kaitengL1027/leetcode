let array = [3, 6, 7, 0, 1, 8, 4, 2, 9, 5];

console.log(array);

const bubbleSort = arr => {
	let ar = arr.slice();
  for (let i = 0; i < ar.length - 1; i++) { //number of passes
    let alreadyFlipped = 0;
    for (let j = 0; j < ar.length - 1 - i; j++) {
      if (ar[j] > ar[j + 1]) {
        [ar[j], ar[j+1]] = [ar[j+1], ar[j]];
        alreadyFlipped = 1;
      }
    }
    if (!alreadyFlipped) {
      break
    }
  }
  return ar;
};

console.log(bubbleSort(array));
console.log(array); // check if bubbleSort mutate the og array