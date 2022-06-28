/* Arrays, collection of data
/* Method of declaring an array
/* Array can contain object
*/

var myArray = [1, 2, 3, "hi", 'hyz', true]; // 1 is in position 0
console.log(myArray);
console.log(myArray.length);   // show the array length
console.log(myArray[5]);


var myNamesArray = new Array();
myNamesArray[0] = "Chris";
myNamesArray[1] = "Mila";
myNamesArray[4] = "Jessica";
console.log(myNamesArray);
console.log(myNamesArray.length);   // length is highest index + 1

// push() and pop()
var myNamesArray1 = ["Chris", "Jessica", "John", "Jane"];
myNamesArray1.push("Mila"); // push, add the item to the end of the array
myNamesArray1.push("Nam");
var lastName = myNamesArray1.pop(); // pop, remove the item of lastest add 
console.log(myNamesArray1);
console.log(lastName);

myNamesArray1.push(10);
myNamesArray1.push(["Bob", "Sally", "Bobo"]);
console.log(myNamesArray1);
console.log(myNamesArray1[6]);  // the entire array with Bob, Sally, Bobo
console.log(myNamesArray1[6][1]);   // Sally

// sort(), reverse()
var sortedArray = myNamesArray1.sort(); // sort() with alphabetical order
console.log(sortedArray);
sortedArray.reverse();  // reverse() order to the sorted array
console.log(sortedArray);

// concat()
var myOtherNames = ["Jake", "Amy", "Timmy"];
var concattedArray = myNamesArray1.concat(myOtherNames);    // Add to the end of the array
console.log(concattedArray);

// slice()
var slicedArray = concattedArray.slice(4, 8);   // start slicing at pos 4 and end at pos 8
console.log(slicedArray);

var slicedArray1 = myOtherNames.slice(myOtherNames.length - 1); // print out the last name
console.log(slicedArray1);
console.log(myOtherNames);

// join()
var joinedArray = slicedArray.join(" ");  // make array as a string with " "
console.log(joinedArray);