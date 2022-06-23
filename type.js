// types, numbers and strings

// numbers
console.log(10 * 5);
console.log(Math.PI);
console.log("10" + 213);    // become string "10213"
console.log(parseInt("10") + 213);  // change "10" to int 10
console.log(isNaN("hello"));    // isNan to show if input is number or not, true is not a number
console.log(isNaN(1));

// Strings
// sequences of unicode characters
console.log("Hello");
console.log("Super duper".length);   // get the length of word, space counts
console.log("Mila".charAt(0));  // Use 0 base index, output M
console.log("Hello" + " " + "world" + "!");
console.log("i want to be uppercase!".toUpperCase());   // All character to uppercase