// condition ? statement-if-true : statement-if-false;

function equalCheck(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
console.log(equalCheck(4, 5));
console.log(equalCheck(7, 7));

function signCheck(a) {
    return a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero";
}
console.log(signCheck(8));
console.log(signCheck(0));
console.log(signCheck(-5));