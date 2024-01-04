function bouncer(arr) {
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]){
        filteredArray.push(arr[i])
      }
    }
    return filteredArray;
  }
  
  bouncer([7, "ate", "", false, 9]);