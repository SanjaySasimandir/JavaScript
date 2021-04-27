const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); //6



/****Rest Operator****/
// ... is rest operator
// can use any number of arguments
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4, 5)); // 15

//Shorter way
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));