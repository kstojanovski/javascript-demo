/**
 * Function.prototype.bind()
 */
/**
 * Scoping issue - Creating a bound function
 */
x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};
console.log(module.getX()); // 81
var retrieveX = module.getX;
console.log(retrieveX());// returns 9 - The function gets invoked at the global scope
// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
//boundGetX();
console.log(boundGetX()); // 81
console.log('direct1: ' + module.getX());
console.log('direct2: ' + module.getX.bind()());


/**
 * Creating predefined function - Partially applied functions
 */
function list() {
	return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3);
console.log(list1); // [1, 2, 3]
// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);
var list2 = leadingThirtysevenList();
console.log(list2);// [37]
var list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3);// [37, 1, 2, 3]
// simplifying array slice call
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);
function slicelist() {
  return slice(arguments);
}
var slicelist = list(1, 2, 3); // [1, 2, 3]
console.log(slicelist);


/**
*
*/
function LateBloomer() {
	  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
	//without 'bind' when declare is invoked petalCount
	//in undefined because it doesn't exist on the global scope.
	setTimeout(this.declare.bind(this), 1000);   
};
LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};
var flower = new LateBloomer();
flower.bloom();  
// after 1 second, triggers the 'declare' method