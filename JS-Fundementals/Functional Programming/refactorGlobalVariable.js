// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
  }
}


const updatedBookListAdd = add(bookList, "The Catcher in the Rye");
console.log(updatedBookListAdd);

// Remove a book
const updatedBookListRemove = remove(updatedBookListAdd, "On The Electrodynamics of Moving Bodies");
console.log(updatedBookListRemove);