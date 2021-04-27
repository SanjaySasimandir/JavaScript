/*
== Converts both variables to same data type and then checks equality
=== Is Strict Equality and therefore needs both variable to be same data type and equal
*/

function test(a, b) {
    if (a == b) {
        console.log(a, "==", b);
    }
    if (a === b) {
        console.log(a, "===", b);
    }
}
test(9, 9); // 9 == 9
// 9 === 9

test(5, "5"); // 5==5