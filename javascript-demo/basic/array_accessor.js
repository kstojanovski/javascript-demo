/**
 * Accessor methods - These methods do not modify the array and return some representation of the array.
 */
/**
* Array.prototype.concat()
* Returns a new array comprised of this array joined with other array(s) and/or value(s).
*/
console.log("Array.prototype.concat");
var arr1 = ['a', 'b', 'c'], arr2 = ['d', 'e', 'f'];
var arr3 = arr1.concat(arr2);
console.log(arr3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
var alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];
var alphanumeric = alpha.concat(numeric);
console.log(alphanumeric); // [ 'a', 'b', 'c', 1, 2, 3 ]
var num1 = [1, 2, 3], num2 = [4, 5, 6], num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var num1 = [[1]], num2 = [2, [3]];
var nums = num1.concat(num2);
console.log(nums); // [[1], 2, [3]]
num1[0].push(4);
console.log(nums); // [[1, 4], 2, [3]]


console.log();console.log();
/**
* Array.prototype.includes()
* Determines whether an array contains a certain element, returning true or false as appropriate.
* 
* arr.includes(searchElement)
* arr.includes(searchElement, fromIndex)
* 
*/
console.log("Array.prototype.includes");
var a = [1, 2, 3];
console.log(a.includes(2)); // true 
console.log(a.includes(4)); // false
console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));     // false
console.log([1, 2, 3].includes(3, 3));  // false
console.log([1, 2, 3].includes(3, 2));  // true
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, 3].includes(3, -2)); // true
console.log([1, 2, 3].includes(1, -2)); // false
console.log([1, 2, NaN].includes(NaN)); // true
//fromIndex > array length   
console.log(['a', 'b', 'c'].includes('c', 3)); // false
console.log(['a', 'b', 'c'].includes('c', 100)); // false
//fromIndex < 0
console.log(['a', 'b', 'c'].includes('a', -100)); // true
console.log(['a', 'b', 'c'].includes('b', -100)); // true
console.log(['a', 'b', 'c'].includes('c', -100)); // true
// generic method
(function() {
	console.log('generic method');
	console.log([].includes.call(arguments, 'a')); // true
	console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');


console.log();console.log();
/**
* Array.prototype.indexOf()
* Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
* 
* arr.indexOf(searchElement)
* arr.indexOf(searchElement, fromIndex)
*/
console.log("Array.prototype.indexOf");
var array = [2, 9, 9];
console.log(array.indexOf(2)); // 0 - found index 0
console.log(array.indexOf(7)); // -1 - not found 
console.log(array.indexOf(9, 2)); // 2 - found index 2
console.log(array.indexOf(2, -1)); // -1 - not found
console.log(array.indexOf(2, -2)); // -1 - not found
console.log(array.indexOf(2, -3)); // 0 - found index 0
console.log(array.indexOf(2, -4)); // 0 - found index 0


console.log();console.log();
/**
* Array.prototype.join()
* Joins all elements of an array into a string.
* 
* arr.join()
* arr.join(separator)
* 
*/
console.log("Array.prototype.join");
console.log(['Wind', 'Rain', 'Fire'].join());    // 'Wind,Rain,Fire'
console.log(['Wind', 'Rain', 'Fire'].join('-')); // 'Wind-Rain-Fire'
console.log(['Wind', 'Rain', 'Fire'].join(', ')); // 'Wind, Rain, Fire'
console.log(['Wind', 'Rain', 'Fire'].join(' + ')); // 'Wind + Rain + Fire'
console.log(['Wind', 'Rain', 'Fire'].join('')); // 'WindRainFire'
console.log([].join());    // 'Wind,Rain,Fire'


console.log();console.log();
/**
* Array.prototype.lastIndexOf()
* Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
* 
* arr.lastIndexOf(searchElement)
* arr.lastIndexOf(searchElement, fromIndex) - positive:0index, negative:1index
* 
*/
console.log("Array.prototype.lastIndexOf");
var numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2)); // 3
console.log(numbers.lastIndexOf(7)); // -1
console.log(numbers.lastIndexOf(2, 4)); // 3
console.log(numbers.lastIndexOf(2, 3));  // 3
console.log(numbers.lastIndexOf(2, 2));  // 0 (on index 2)
console.log(numbers.lastIndexOf(2, -2)); // 0 (on index 2)
console.log(numbers.lastIndexOf(2, -1)); // 3
var numbers = [2, 5, 9, 2, 4];
console.log(numbers.lastIndexOf(2, 2));  // 0 (on index 2)
console.log(numbers.lastIndexOf(2, -2)); // 0 (on index 3)


console.log();console.log();
/**
* Array.prototype.slice()
* Extracts a section of an array and returns a new array.
* 
* arr.slice()
* arr.slice(begin)
* arr.slice(begin, end)
* 
*/
console.log("Array.prototype.slice");
var a = ['zero', 'one', 'two', 'three'], sliced = a.slice(1, 3);
console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);
console.log('myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));


console.log();console.log();
/**
* Array.prototype.toString()
* Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
* 
* arr.toString()
* 
*/
console.log("console.log();console.log");
var months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log(months.toString()); // "Jan,Feb,Mar,Apr"


console.log();console.log();
/**
* Array.prototype.toLocaleString()
* Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
* 
* arr.toLocaleString();
* arr.toLocaleString(locales);
* arr.toLocaleString(locales, options);
* 
*  
*/
console.log("Array.prototype.toLocaleString");
var number = 1337, date = new Date(), myArr = [number, date, 'foo'];
//formatting works well in browser and not in this environment
console.log(myArr.toLocaleString()); 
var prices = ['￥7', 500, 8123, 12]; 
// formatting works well in browser and not in this environment
console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));