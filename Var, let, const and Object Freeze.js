var name = "nfsboy";
var name = "Jojo Rabbit";
// No Errors


let name = "nfsboy";
let name = "Jojo Rabbit";
// SyntaxError: unknown: Identifier 'name' has already been declared


let name = "nfsboy";
name = "Jojo Rabbit";

function checkScope() {
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}
checkScope();



const VALUE = 5; // x is always 5 and any attempt to change it will cause error
//But const arrays and objects are mutable

const ARRAY = [1, 2, 3, 4, 5];
ARRAY[0] = 10;
console.log(ARRAY); // [10, 2, 3, 4, 5]

// Use Object.freeze(variable) to make the variable immutable
const ARRAY = [1, 2, 3, 4, 5];
Object.freeze(ARRAY);
ARRAY[0] = 10;
console.log(ARRAY); // TypeError: 0 is read-only (/index.js:3)
