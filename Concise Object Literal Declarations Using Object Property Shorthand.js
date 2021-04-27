//Explanation
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
//is converted to
const getMousePosition = (x, y) => ({ x, y });

/*********************/
//Before
const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return {
        name: name,
        age: age,
        gender: gender
    };
    // Only change code above this line
};

//After
const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return ({ name, age, gender });
    // Only change code above this line
};
