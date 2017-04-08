/**
 * Examples with type instance of
 */
// defining constructors
function C() {}
function D() {}

var o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C; 

D.prototype = new C(); // add C to [[Prototype]] linkage like'inheritance'
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true


/**
 * Examples
**/
var simpleStr = 'This is a simple string'; 
var myString  = new String();
var newStr    = new String('String created with constructor');
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, same case as above

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false



/**
* Examples
**/
function Car(make, model, year) {
	  this.make = make;
	  this.model = model;
	  this.year = year;
	}
var mycar = new Car('Honda', 'Accord', 1998);
var a = mycar instanceof Car;    // returns true
console.log(a);
var b = mycar instanceof Object; // returns true
console.log(b);