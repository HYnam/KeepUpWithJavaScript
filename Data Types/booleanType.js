// booleans
console.log(true);

var shouldBeTrue = true;
var shouldBeNull = null;    // Empty var evaulate to false

console.log(shouldBeNull);

if (shouldBeTrue === true) {
    console.log("This var is true");
} else {
    console.log("This var is not true");
}

var hasContent = "kjohoh";
var myArray = ["1", "2", "3", "4"];
var emptyArray = [];

var doesNotHaveContent = "";
var isZero = 0;
var nonAssignedVar;
var isFalse = false;    // false
var isNotANumber = NaN;

console.log(nonAssignedVar);    // undefined
console.log(isNotANumber);  // NaN
console.log(null === undefined);    // false, they are not the same thing

console.log(Boolean(hasContent));   // true, there is content in the var
console.log(Boolean(doesNotHaveContent));   // false
console.log(Boolean(isZero));   // False
console.log(Boolean(nonAssignedVar));   // false
console.log(Boolean(isNotANumber));     // false
console.log(Boolean(myArray));      // True
console.log(Boolean(emptyArray));   // True

if (myArray) {  // same as if(Boolean(myArray))
    console.log("Has true values");
} else {
    console.log("Has false values");
}