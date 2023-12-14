// After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;
console.log(myNum);

// The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.

// variables with string

var myFirstName = "Zahid";
var myLastName = "Hasan";

// Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
