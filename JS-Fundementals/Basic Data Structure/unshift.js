function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));