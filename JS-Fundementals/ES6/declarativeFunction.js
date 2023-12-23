
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  
  bicycle.setGear(4);
  console.log(bicycle.gear);