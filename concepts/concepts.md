## NOTE: there is no READme or javascript file for this prompt. Just answer each question below in your own words and be as thorough as possible.

1. When would you use a for loop and when would you use a for-in loop?
A "for" loop is used to iterate through the items in an array, whereas a "for-in" loop is used to iterate through the properties in an object.

2. What is an anonymous function? Why would we want to use one?
An anonymous function is an unnamed function and is used to define a function expression.  It can be assigned to a variable for later use, and is also useful for passing in as a callback to another function.

3. What is an IIFE, and how is it written?
An immediately-invoked function expression is a function which executes immediately after it is created.  It is written using the (function() {})() construct.  Example:
(function () {
	console.log("hello world");
})();

4. Why do we write tests for our code?
Tests are useful for validating the correctness of the code, usually by passing in input(s) that result in predictable output(s).  They are also useful for uncovering bugs in the code.  If the test returns an output that is not expected given the input, it provides a useful feedback mechanism on which function might be not be behaving as expected, for example, and can provide clues on where the issue might be.

5. What does it mean to clone a repo?
Cloning a repo means getting a local copy of the an existing remote repository in GitHub.

6. What is a higher order function? What is a callback?
A higher order function is a function that accepts other functions as input arguments.  A callback is a function that is passed in as the input to another function. Example:

var printer = function(item) {
	console.log("I got " + item);	
};
// hofExample is the higher order function that takes in another function (callback)
var hofExample = function(inputObject, callback) {
	for (var key in inputObject) {
      	callback(key);
    }
};
// printer is the callback
hofExample({name:"Elaine"}, printer);
