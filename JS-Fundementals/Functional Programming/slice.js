function sliceArray(anim, beginSlice, endSlice) {
  const newArray = anim.slice(beginSlice, endSlice);
  return newArray;
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
