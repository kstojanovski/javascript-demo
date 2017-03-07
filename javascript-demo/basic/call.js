/**
 * Examples about the call function.
 */
console.log("call.js");
var func = function () {
	return (arguments [0] * arguments [1]);
}

console.log(func(1, 2));
console.log(func.call(this, 1, 2));