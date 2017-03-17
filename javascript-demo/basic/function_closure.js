/**
 * Examples with java script functions - closure
 */
// A closure is a function having access to the parent scope, even after the
// parent function has closed.
console.log("closure");
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
console.log(add());
console.log(add());
console.log(add());
// creating functions
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));
console.log(add10(2));
// counter
console.log("counter");
var counter = (function() {
var privateCounter = 0;
function changeBy(val) {
	privateCounter += val;
}
return {
	increment: function() {
		changeBy(1);
	},
	decrement: function() {
		changeBy(-1);
	},
	value: function() {
		return privateCounter;
	}
};   
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
// multiple counter
console.log("miltiple counter");
var makeCounter = function() {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function() {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},
		value: function() {
			return privateCounter;
		}
	}  
};
var counter1 = makeCounter();
var counter2 = makeCounter();
console.log("c1: " + counter1.value());
counter1.increment();
counter1.increment();
console.log("c1: " + counter1.value());
counter1.decrement();
console.log("c1: " + counter1.value());
console.log("c2: " + counter2.value());
counter2.increment();
counter2.increment();
counter2.increment();
console.log("c1: " + counter1.value());
console.log("c2: " + counter2.value());
//object
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);
var myObject = new MyObject("info", "everything is under control!");
console.log("mname: " + myObject.getName());
console.log("mmessage: " + myObject.getMessage());


/**
 * Examples with java script functions - closure
 */
// A closure is a function having access to the parent scope, even after the
// parent function has closed.
console.log("closure");
var add = (() => {
    var counter = 0;
    return () => {return counter += 1;}
})();
console.log(add());
console.log(add());
console.log(add());