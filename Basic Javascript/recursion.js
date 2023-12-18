function sum(arr, n) {

    if(n <= 0){
      return 0;
    }
    else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
  }
  
  const ans = sum([1,2,3,4], 3);
  console.log(ans)