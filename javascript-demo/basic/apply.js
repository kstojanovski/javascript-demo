/**
 * Examples about the apply function.
 */
console.log("apply.js");
var func = function () {
	return (arguments [0] * arguments [1]);
}

console.log(func(1, 2));
console.log(func.apply(this, [1, 2]));


