// Here's how it works:

// If a is considered greater than b, the expression a > b evaluates to true, and in that case, 1 is returned.
// If a is not greater than b, the expression a > b evaluates to false, and in that case, -1 is returned.
// In JavaScript, the sort method expects a comparator function to be passed as an argument. This comparator function should return a negative value if a should be sorted before b, a positive value if a should be sorted after b, and 0 if the order of a and b doesn't matter (they are considered equal in terms of sorting).

// So, in this specific case:

// If a is greater than b, 1 is returned, indicating that a should be sorted after b.
// If a is not greater than b, -1 is returned, indicating that a should be sorted before b.
// This way, the sort method uses the comparator function to sort the array in ascending order based on the comparison of elements. The result is an array sorted in alphabetical order.

function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}
alphabeticalOrder(["l", "h", "z", "b", "s"]);

const a = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(a);
