//Before

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // Only change code below this line
    const resultDisplayArray = null;
    // Only change code above this line

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

//After
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // Only change code below this line
    let resultDisplayArray = [1, 2, 3];
    for (let i = 0; i < 3; i++) {
        resultDisplayArray[i] = (`<li class="text-warning">${result.failure[i]}</li>`)
    };
    // Only change code above this line

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

