// 1. Given an array of unsorted numbers and a reference find if the reference number exists in the array.
// 1.	Array: [5, 9, 8, 6] reference: 9 - This should return true.
// 2.	Array: [5, 9, 8, 6] reference: 10 - This should return false.

const findReference = (array, ref) => {
  return array.includes(ref);
};

const dummyArray = [5, 9, 8, 6];
console.log(findReference(dummyArray, 9));
console.log(findReference(dummyArray, 10));

// 2. Given an array of sorted numbers and a reference find if the reference number exists in the array.
// 1.	Array: [5, 6, 8, 9] reference: 9 - This should return true.
// 2.	Array: [5, 6, 8, 9] reference: 10 - This should return false.

// Same answer as question 1 answer

const findReference = (array, ref) => {
  return array.includes(ref);
};

const dummyArray = [5, 9, 8, 6];
console.log(findReference(dummyArray, 9));
console.log(findReference(dummyArray, 10));
