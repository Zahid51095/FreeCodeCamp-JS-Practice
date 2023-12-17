// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
// Note that property names with spaces in them must be in quotes (single or double).


const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  myObj["Space Name"];
  myObj['More Space'];
  myObj["NoSpace"];