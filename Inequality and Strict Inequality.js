/*
!= Converts both variables to same data type and then checks inequality
!== Is Strict Inequality and therefore needs both variable to be same data type and equal
*/

function test(a, b) {
    if (a != b) {
        console.log(a, "!=", b);
    }
    if (a !== b) {
        console.log(a, "!==", b);
    }
}
test(4, 5); // 4 != 5
// 4 !== 5

test(5, "5"); // 5 !== 5