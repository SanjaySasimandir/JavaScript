var theCar = {
    "Brand": "Toyota",
    "Name": "Supra",
    "Wheels": 4,
    "HP": 320,
    "otherNames": ["MKIV", "A80"]
};

console.log(theCar);
// {"Brand":"Toyota","Name":"Supra","Wheels":4,"HP":400,"otherNames":["MKIV","A80"]}

// Properties an be accessed in two ways:
console.log(theCar.Brand); // Toyota
console.log(theCar["Name"]); // Supra

// Values are mutable
theCar.HP = 400;
console.log(theCar.HP); // 400

// Properties can be added
theCar.Targa = true;
console.log(theCar);
// {"Brand":"Toyota","Name":"Supra","Wheels":4,"HP":400,"otherNames":["MKIV","A80"],"Targa":true}

// Deletion of a property
delete theCar.Wheels;
// {Brand: "Toyota", Name: "Supra", Wheels: 4, HP: 400, otherNames: ["MKIV", "A80"], Targa: true}

//Check if the object has a property
console.log(theCar.hasOwnProperty("otherNames")); // true