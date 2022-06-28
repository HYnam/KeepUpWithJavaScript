// Arrays, collection of data
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


var myNamesArray1 = ["Chris", "Jessica", "John", "Jane"];
myNamesArray1.push("Mila"); // push, add the item to the end of the array
myNamesArray1.push("Nam");
var lastName = myNamesArray1.pop(); // pop, remove the item of lastest add 
console.log(myNamesArray1);
console.log(lastName);

myNamesArray1.push(10);
myNamesArray1.push(["Bob", "Sally", "Bobo"]);
console.log(myNamesArray1);
console.log(myNamesArray1[6]);  // the entire array

//9:45