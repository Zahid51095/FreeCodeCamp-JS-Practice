function add(x) {
    return function(y){
      return function(z){
        return x + y + z;
      }
    }
  }
  
  const a = add(10)(20)(30);
  console.log(a)