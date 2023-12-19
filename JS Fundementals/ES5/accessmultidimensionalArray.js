// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];

  
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

console.log(subarray);
console.log(nestedSubarray);
console.log(element);