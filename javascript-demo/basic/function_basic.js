/**
 * Examples about the functions in basic notation.
 */

/**
 * Why to bother if function is declaration or expression?
 * 1. Function expressions can be mostly execute/invoked by using he ()-sign,
 * function declaration not.
 * 2. Function declarations get hoisted. 
 * "Function declarations and function variables are always moved (‘hoisted’) 
 * to the top of their JavaScript scope by the JavaScript interpreter."
 * Function declarations cam be called after and before the definition, 
 * function expression only after definition.
 */

/**
 * Function defined with the Function constructor 
 * (Function declaration)
 */
//function declaration
function foo() {console.log("foo");}
//simple example
function oldgoodfunction() {
	console.log("oldgoodfunction");
}
oldgoodfunction();
//simple example
function multiply0(x, y) {
	return x * y;
}
console.log(multiply0(3, 8));
// assignment of an function into variable  
function varFunction(a, b) {
	return a + b;
}
var x = 3, y = 6, summ = varFunction(x, y), result = "the summ of " + x + " and " + y + " is " + summ;
console.log(result);

/**
 * Function expression of an anonymous function.
 * (Function expression)
 */
var multiply1 = function(x, y) {
	return x * y;
};
console.log(multiply1(3, 8));


/**
 * Function expression of a named function - func_name only visible in function
 * body.
 * (Function expression)
 */ 
var multiply2 = function func_name(x, y) {
	if (x == 1) {
		func_name(--x, y);
	}
   return x * y;
};
console.log(multiply2(3, 8));
console.log(multiply2(1, 8));


/**
 * IIFE (Immediately Invokable Function Expressions)
 * (Function expression)
 */
(function bar() {})
(function bar() {console.log("bar");})


/**
 * When function declaration becomes function expression
 * Assigned to an variable.
 * Nested within another statement.
 * (Function declaration) -> (Function expression)
 */
function hello() {console.log("hello");}
var x = function hello() {console.log("hello"); }
if (false) {
	// Rule2 - function declaration -> statement (expression) no hoisting - world is undefined
	function world() {console.log("world");}
}
console.log("x: "+ x());
console.log("world: "+ world);
// function declaration
function a() {
   // function declaration
   function b() {}
   // the c is never defined because of 0
   if (0) {
      // Rule2 - function declaration -> statement (expression) no hoisting - c is undefined on return
      function c() {}
   }
   console.log("a: "+ a);
   console.log("b: "+ b);
   console.log("c: "+ c);
   return c;
}
console.log("a: "+ a());


/**
 * NOTE: Function expressions can be execute/invoked by using he ()-sign,
 * function declaration not.
 */
//Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
​function foo() { 
    console.log('Hello Foo'); 
}();
*/
(function foo() {
    console.log("Hello Foo");
}());
// Douglas Crockford's style

(function food() {
    console.log("Hello Food");
})();
//self-invoking function
(function bar() {console.log("bar");})();
x = function hello() {console.log("hello");}; x();


/**
 * Self invoking function - recursive function.
 * @param x
 * @returns
 */
function loop(x) {
 if (x >= 10)
    return;
 console.log(x);
 loop(x + 1);
} 
loop(0);