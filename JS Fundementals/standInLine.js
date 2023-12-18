function nextInLine(arr, item) {
  
    arr.push(item);
    const removed = arr.shift();
    return removed;
   
  }
  
  
  let testArr = [1, 2, 3, 4, 5];

  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));