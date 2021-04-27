var name = "Homer";

function changeName() {
    var name = "Bart";
    return name;
}
console.log(changeName()); //Bart
console.log(name); //Homer

/***************************************/

var name = "Homer";

function changeName2() {
    name = "Bart";
    return name;
}
console.log(changeName2()); //Bart
console.log(name); //Bart