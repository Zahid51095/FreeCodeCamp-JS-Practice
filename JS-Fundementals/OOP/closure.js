// n JavaScript, a function always has access to the context in which it was created. This is called closure.


function Bird() {
    let weight = 15;
  
    this.getWeight = function(){
      return weight;
    }
  
  }
  
  let Eagle = new Bird();
  console.log(Eagle.getWeight())