var array = [];
for (var i = 0; i < 5; i++) {
    array.push(i);
}
console.log(array); // [0, 1, 2, 3, 4]

//Incrementing by 2
var newArray = [];
for (var i = 0; i < 10; i += 2) {
    newArray.push(i);
}
console.log(newArray); // [0, 2, 4, 6, 8]

//Decrementing by 2
var newArray = [];
for (var i = 10; i > 0; i -= 2) {
    newArray.push(i);
}
console.log(newArray); // [10, 8, 6, 4, 2]