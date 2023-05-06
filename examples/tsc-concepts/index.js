"use strict";
console.log('Hello!!');
// Basic data types string number boolean void undefined null
let namePerson = "Maria Giraldo";
let years = 12;
let statusPerson = true; // false
// Don't know data type
let data = undefined;
data = "string";
data = 12345;
// List - Array
const aNumbers = [1, 2, 3, 4, 5, 6, 7];
const aNumbers2 = [1, 2, 3, 4, 5, 6, 7];
const aString = ["1", "2"];
const aBool = [true, false];
// Functions
const getName = (id) => {
    return "nombre";
};
const newName = getName(12);
// Void function
const printMessage = (message) => {
    console.log(message);
};
const f1 = (n1, n2) => n1 * n2;
f1(2, 2);
// ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
const newColor = Color.Yellow;
console.log(newColor, Color[newColor], typeof Color[newColor]);
var BikeType;
(function (BikeType) {
    BikeType[BikeType["Electric"] = 0] = "Electric";
    BikeType[BikeType["Normal"] = 1] = "Normal";
    BikeType[BikeType["Old"] = 2] = "Old";
})(BikeType || (BikeType = {}));
const rentBike = {
    id: 1,
    owner: "Pepito",
    type: BikeType.Electric,
    type2: "Electric"
};
const objPerson = {
    id: 1,
    name: "maria",
    gender: 124,
    parents: ['mother', 'father'],
    getFullName: () => {
        console.log('getFullName', this);
        return this.name;
    },
    isMajor: function () {
        return true;
    }
};
objPerson.getFullName();
