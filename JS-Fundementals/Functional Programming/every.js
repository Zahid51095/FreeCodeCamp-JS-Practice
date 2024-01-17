function checkPositive(arr) {
  return arr.every((val) => val > 0);
}

const a = checkPositive([1, 2, 3, -4, 5]);
console.log(a);
