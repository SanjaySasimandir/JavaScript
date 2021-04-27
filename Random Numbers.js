console.log(Math.random()); // Prints a random decimal less than 1
console.log(Math.floor(2.3)); // 2 is Floor value of the decimal


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(5, 10))