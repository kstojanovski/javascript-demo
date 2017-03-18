/**
 * When functionality is depend on some property which is global and can be
 * decided at the beginning of the application.
 */
/**
 * Decision on function first call
 */
var property = 1;
function test() {
	if (property == 0) {
		test = function() {
			return 0;
		}
	} else if (property == 1) {
		test = function() {
			return 1;
		}
	} else {
		test = function() {
			return -1;
		}
	}
	return test();
}
console.log(test());
/**
 * Example with an js objects
 */
function Operation(name) {
    if (!(this instanceof Operation)){
        return new Operation(name);
    }
    this.name = name || "add";
};
Operation.prototype.calculate = function() {
	if (this.name === "add"){
		this.calculate = function(a, b) {
			return a + b;
		}
	} else if (this.name === "multi"){
		this.calculate = function(a, b) {
			return a * b;
		}
	}
	return this.calculate.apply(this, arguments);
}
var opAdd = new Operation(), opMulti = new Operation("multi");
console.log('add0: ' + opAdd.calculate(2, 5));
console.log('add1: ' + opAdd.calculate(2, 3));
console.log('multi0: ' + opMulti.calculate(2, 5));
console.log('multi1: ' + opMulti.calculate(2, 3));


/**
 * Decision on function declaration
 */
var property = 2;
var test2 = (function() {
	if (property == 0) {
		return function() {
			return 0;
		}
	} else if (property == 1) {
		return function() {
			return 1;
		}
	} else {
		return function() {
			return -1;
		}
	}
	return test2();
}());
console.log(test2());