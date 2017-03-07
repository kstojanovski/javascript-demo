/**
 * Examples about the arguments.callee function.
 */
//arguments.callee property contains the currently executing function
console.log("callee.js");
function factorial(n){
  if (n <= 0)
     return 1;
  else
     return n * arguments.callee(n - 1)
}
console.log(factorial(5));
function create() {
	   return function(n) {
	      if (n <= 1)
	         return 1;
	      return n * arguments.callee(n - 1);
	   };
	}
var result = create()(5);
console.log(result);