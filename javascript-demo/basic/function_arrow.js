/**
 * Examples about the functions in arrow notation.
 */

/**
 * Parameterless arrow functions that are visually easier to parse
 */

/**
 * Simple examples
 */
// concise syntax, implied "return"
var func = function (x) {
	return  x * x;
}
console.log(func(3));
var func = x => x * x;                  
console.log(func(3));
//with block body, explicit "return" needed
var func = function (x, y) {
	return  x + y;
}
console.log(func(3, 4));
var func = (x, y) => { return x + y; }; 
console.log(func(3, 4));
//returning object
var func = function () {
	return  {foo: 1};
}
console.log(func());
var func = () => ({foo: 1});
console.log(func());
//An empty arrow function returns undefined
var empty = function() {
	return {};
}
console.log(empty + ": " + empty());
var empty = () => {};
console.log(empty + ": " + empty());
//threshold
var simple = function (a) {
	return a > 15 ? 15 : a;
}
console.log(simple(16)); // 15
console.log(simple(10)); // 10
var simple = a => a > 15 ? 15 : a; 
console.log(simple(16)); // 15
console.log(simple(10)); // 10
//max
var max = function (a, b) {
	return a > b ? a : b;
}
console.log(max(3, 7));
var max = (a, b) => a > b ? a : b;
console.log(max(3, 7));
// IIFE, returns "foobar"
(() => 'foobar')(); 


/**
 * Elegant syntax for operation with arrays as filtering, mapping, ... 
 */
var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]
//array operations
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log(f());  // 6

/**
 * Examples with java script functions 
 */
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
setTimeout (() => {
	console.log("One second is gone!")
},1000);