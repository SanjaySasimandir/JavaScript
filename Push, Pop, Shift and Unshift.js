/**** PUSH AND POP ****/
var array = ["Homer", "J", "Simpson"];

//Pushing an element into an array
array.push("Maggie"); //["Homer", "J", "Simpson", "Maggie"]
console.log(array);

//Popping the last element from the array
var removedFromArray = array.pop(); //This variable now holds the value of the element
console.log(array); //["Homer", "J", "Simpson"]

//Pushing an array into another array
array.push(["Bart", "Simpson"]);
console.log(array); //["Homer", "J", "Simpson", ["Bart", "Simpson"]]

//Popping the last array in the nested array
var removedFromArray = array.pop(); //This variable now holds the value of the element
console.log(array); //["Homer", "J", "Simpson"]



/**** SHIFT AND UNSHIFT ****/
var array = ["Homer", "J", "Simpson"];

//Removes the first element
var removedFromArray = array.shift(); //This variable now holds the value of the element
console.log(array); //["J", "Simpson"]

//Adds an element to the beginning of the array
array.unshift("Bart")
console.log(array); //["Bart", "J", "Simpson"]

//time=51:46
