// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function(num1, num2) {
	return num1 * num2;
};
console.log(multiply(2,6));

// whatForLunch
var whatForLunch = function(name, food) {
	return name + " had " + food + " for lunch today";
};
console.log(whatForLunch("Elaine", "curry noodles"));

// isLargerThan100
var isLargerThan100 = function(number) {
	return number > 100;
};
console.log(isLargerThan100(101));		// returns true

// anyEvens
var anyEvens = function(numbers) {
	var hasEvenNumber = false;
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0)
		{
			hasEvenNumber = true;
			break;
		}
	}
	return hasEvenNumber;
};
console.log(anyEvens([1,3,5,8,9]));		// returns true

// printDataType
// helper function to printDataType for looping through the input parameter collection
var loop = function(collection, callback){
    // ultimate side-effects function
    if (Array.isArray(collection)) {
    	for (var i = 0; i < collection.length; i++) {
      		callback(collection[i]);
    	}
  	} else if (typeof collection === 'object') {
    	for (var key in collection) {
      		callback(collection[key]);
    	}
  	} else {
  		console.log("I do not know what you are! What are you?.");
  	}
};

// callback helper function - checks for the type of the input parameter item
var checkType = function(item) {
	if (Array.isArray(item)) {
		console.log("I am an array");
	} else if (item instanceof Function) {
    	console.log("I am a function");
  	} else if (typeof item === "string") {
    	console.log("I am a string");
  	} else if (typeof item === "number") {
    	console.log("I am a number");
    } else if (typeof item === "boolean") {
    	console.log("I am a boolean");
    }
};

var printDataType = function(collection, callback) {
  loop(collection, callback);
};

var testObject = {
	name: "Elaine",
	wantsToBe: "ninja",
	numOfWeapons: 5,
	stealthMode: true,
	throwPunch: function() {
		return "punch!";
	},
	weapons: ["katana", "shuriken", "sai", "grappling hook"]
};

var testArray = ["Elaine", {worksAt: "San Francisco"}, 5, checkType, [0,1]];

printDataType(testObject, checkType);		// pass in object
printDataType(testArray, checkType);		// pass in array
printDataType(123456, checkType);			// pass a number 

// isDivisibleBy
var isDivisibleBy = function(num1, num2) {
	return num1 % num2 === 0;
};

console.log(isDivisibleBy(6, 2));		// returns true
console.log(isDivisibleBy(15, 2));		// returns false

// fizzBuzz
var fizzBuzz = function(numbers) {
	loop(numbers, function(number) {
		if (isDivisibleBy(number, 5) && isDivisibleBy(number, 3)) {
			console.log("FizzBuzz");
		} else if (isDivisibleBy(number, 3)) {
			console.log("Fizz");
		} else if (isDivisibleBy(number, 5)) {
			console.log("Buzz");
		} else {
			console.log(number);
		}
	});
};

fizzBuzz([15, 20, 18, 19]);
