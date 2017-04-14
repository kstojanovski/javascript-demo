/**
 * The spread syntax allows an expression to be expanded in places where
 * multiple arguments (for function calls) or multiple elements (for array
 * literals) or multiple variables (for destructuring assignment) are expected.
 * 
 * myFunction(...iterableObj);
 * [...iterableObj, 4, 5, 6];
 * 
 */
/**
 * functions 
 */
console.log("*** spread syntax in functions");
function myFunction(x, y, z) {
	console.log(arguments);
	console.log(...arguments);
}
var args = [0, 1, 2];
myFunction.apply(null, args);
myFunction(...args);
function myFunction2(v, w, x, y, z) {
	console.log(arguments);
}
var args = [0, 1];
myFunction2(-1, ...args, 2, ...[3]);

var countries = ['Moldova', 'Ukraine'];  
var otherCountries = ['USA', 'Japan'];  
countries.push.apply(countries, otherCountries);  
console.log(countries); // ['Moldova', 'Ukraine', 'USA', 'Japan']  
var countries = ['Moldova', 'Ukraine'];  
var otherCountries = ['USA', 'Japan'];  
countries.push(...otherCountries);  
console.log(countries); // ['Moldova', 'Ukraine', 'USA', 'Japan']  
/**
 * arrays 
 */
console.log("*** spread syntax in arrays");
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);
var o = new Object(...lyrics);
console.log(o);
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log("...");
var a = [[1], [2], [3]];
console.log(...a);
var b = [...a];
b.shift().shift(); // 1
console.log(b); // Now array b is: [[2], [3]]
console.log("...");
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = arr1.concat(arr2);
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);
console.log("...");
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1);
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1];
console.log(arr1);
console.log("...");
var seasons = ['winter', 'spring', 'summer', 'autumn'];  
var coldSeason, otherSeasons;  
[coldSeason, ...otherSeasons] = seasons;
console.log(coldSeason);   // 'winter'  
console.log(otherSeasons); // ['spring', 'summer', 'autumn']  
