// 
// This code defines a JavaScript function called updateRecords that takes four parameters: records (an object representing a music record collection), id (an identifier for a specific record), prop (a property of the record), and value (the new value to be assigned to the specified property). The function updates the record collection based on the provided parameters and a set of conditions.

//Let's break down the code:

//The recordCollection object represents a music record collection with several records identified by unique IDs (e.g., 2548, 2468). Each record has properties such as albumTitle, artist, and tracks.

//The updateRecords function is designed to modify the recordCollection based on the specified parameters.

//Inside the function, a series of conditional statements are used to determine how the record should be updated based on the provided prop and value.

//The first condition checks if prop is not equal to "tracks" and value is not an empty string. If true, it updates the specified property with the new value.

//The second condition checks if prop is "tracks" and if the specified record does not already have a "tracks" property. If true, it creates a new "tracks" property as an array with the provided value.

//The third condition checks if prop is "tracks" and value is not an empty string. If true, it appends the value to the existing "tracks" array.

//The fourth condition checks if value is an empty string. If true, it deletes the specified property from the record.

//Finally, the function returns the updated records object.

//The code then calls the updateRecords function with specific parameters (recordCollection, 5439, 'artist', 'ABBA') and stores the result in the variable ans. The updated record collection is then logged to the console.



const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  

  function updateRecords(records, id, prop, value) {
    if(prop !== "tracks" && value !== ""){
      records[id][prop] = value;
    }
    else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [value];
    }
    else if(prop === "tracks" && value !== ""){
      records[id][prop].push(value);
    }
    else if(value === ""){
      delete records[id][prop];
    }
    return records;
  }
  
  const ans = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(ans)