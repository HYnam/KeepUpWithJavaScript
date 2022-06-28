// Objects, a collections of name-value pairs
// Same as dictionary in Python
// Each key must be unique

var myName = {1: "Chris"};
console.log(myName);


var myObject = new Object();
myObject['1'] = "Chris";
myObject['2'] = "Mila";
myObject['3'] = 'Sally';
myObject['4'] = "Bob";
console.log(myObject);


var myOtherObject = {
    1: "Chris",
    2: "Mila", 
    3: "Sally",
    4: "Bob",
    5: "Jane",
};
myOtherObject['6'] = "Ashley";
console.log(myOtherObject);


var anotherObject = {
    firstName: "Chris",
    lastName: "Smith",
    age: 50,
    numbers:{
        phone: 12345678,
        home: 55556666, 
    },
    address: "27C",    
}
console.log(anotherObject);
console.log(anotherObject['firstName']);
console.log(anotherObject.numbers.home);    // they are the same
console.log(anotherObject.numbers["phone"]);    // they are the same

var userMobileNumber = anotherObject.numbers.phone; // same way to show phone number
console.log(userMobileNumber);


function sayHi() {
    console.log("Hi");
}
sayHi();


var donut = {
    type: "coconut",
    glazed: true,
    sweetness: 8, 
    hasChocolate: false,
    sayHello: function() {
        console.log("Hello");
    },
    sayType: function() {
        console.log("Type: " + this.type);
    },
    showSweetness : function() {
        console.log("Sweetness: " + this.sweetness + "/10");
    }
}
console.log(donut);
donut.sayHello();
donut.sayType();
donut.showSweetness();


// Constructor pattern for creating objects
function donutConstructor(type, glazed, sweetness, hasChocolate) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function() {
        console.log("Type: " + this.type);
    };
    this.showSweetness = function() {
        console.log("Sweetness: " + this.sweetness + "/10");
    };
}


var coconutDonut = new donutConstructor("coconut", false, 8, true);
console.log(coconutDonut);
var vanillaDonut = new donutConstructor("vanilla", true, 10, false);
vanillaDonut.sayType();
vanillaDonut.showSweetness();
coconutDonut.tasteGood = true;
console.log(coconutDonut);

