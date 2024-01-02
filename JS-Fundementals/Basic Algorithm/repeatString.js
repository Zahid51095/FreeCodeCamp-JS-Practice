function repeatStringNumTimes(str, num) {
    let newString = "";
    for(let i = 0; i < num; i++){
      newString += str;
    }
    return newString;
  }
  
  const ans = repeatStringNumTimes("abc", 3);
  console.log(ans)