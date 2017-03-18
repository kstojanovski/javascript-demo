/**
 * break down a function that takes multiple arguments into a series of
 * functions that take part of the arguments.
 * partial function application
 */
/**
 * Simple example
 */
//given
function add (a, b) {
  return a + b;
}
console.log('0: ' + add(3, 4)); //returns 7
//translated into
function addCurr (a) {
  return function (b) {
    return a + b;
  }
}
console.log('1: ' + addCurr(3)(4));
var add3 = addCurr(3);
console.log('2: ' + add3(4));


/**
 * Another example
 */
function addLazy(x,y) {
  if (typeof y === "undefined" ) {
    return function (yy) {
      return x + yy;
    }
  }
  return x + y;
}
console.log(addLazy(2,4)); //6
var addLazy3 = addLazy(3); //currying
console.log(addLazy3(5));  //8


/**
 * Depend on the add function
 */
function curry(fn) {
	//arguments first call - function and the first argument 5
	var args = Array.prototype.slice.call(arguments, 1);
	return function () {
		//arguments second call - argument 3
		var innerArgs = Array.prototype.slice.call(arguments),
		finalArgs = args.concat(innerArgs);
		return fn.apply(null, finalArgs);
	};
}
var curriedAdd = curry(add, 5);
console.log(curriedAdd(3));  //8