/**
 * Mutator methods - These methods modify the array
 */
/**
 * Array.prototype.copyWithin()
 * Copies a sequence of array elements within the array.
 * 
 * arr.copyWithin(target)
 * arr.copyWithin(target, start)
 * arr.copyWithin(target, start, end)
 * 
 * same array is given twice and then second is manipulated   
 * target - start position for the manipulation of the array - zero based and included 
 * start - start point of the copy sequence - zero based and included - default 0
 * end - end point of the copy sequence - zero based but not included
**/
console.log("Array.prototype.copyWithin");
console.log("*** array");
console.log([1, 2, 3, 4, 5]);
console.log([1, 2, 3, 4, 5].copyWithin(2)); // [ 1, 2, 1, 2, 3 ]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 2)); // [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [4, 5, 3, 4, 5]
console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(0, 3)); // [4, 5, 6, 7, 5, 6, 7]
console.log([1, 2, 3, 4, 5].copyWithin(-2)); // [1, 2, 3, 1, 2]
console.log([1, 2, 3, 4, 5].copyWithin(-4)); // [1, 1, 2, 3, 4]
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1)); // [1, 2, 3, 3, 4]
console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(-4, -3, -1)); // [1, 2, 3, 5, 6, 6, 7]
console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(-4, -3)); // [1, 2, 3, 5, 6, 7, 7]
console.log("*** obj");
console.log({length: 5, 3: 1});
console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3)); // {0: 1, 3: 1, length: 5}
console.log("*** typed array");
// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);
console.log(i32a.copyWithin(0, 2)); // Int32Array [3, 4, 5, 4, 5]
// On platforms that are not yet ES2015 compliant: 
console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4)); // Int32Array [4, 2, 3, 4, 5]


console.log();
console.log();
/**
 * Array.prototype.fill()
 * 
 * arr.fill(value)
 * arr.fill(value, start)
 * arr.fill(value, start, end)
 * 
 * Fills all the elements of an array from a start index to an end index with a static value.
**/
console.log("Array.prototype.fill()");
console.log("*** array");
console.log([1, 2, 3].fill(4));               // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1));            // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2));         // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1));         // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2));       // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN));     // [1, 2, 3]
console.log(Array(3).fill(4));                // [4, 4, 4]
console.log("*** obj");
console.log({ length: 3 });
console.log([].fill.call({ length: 3 }, 4));  // {0: 4, 1: 4, 2: 4, length: 3}
console.log([].fill.call({ length: 2 }, 4));  // {0: 4, 1: 4, length: 3}


console.log();
console.log();
/**
 * Array.prototype.pop()
 * Removes the last element from an array and returns that element.
 * 
 * arr.pop()
**/
console.log("Array.prototype.pop()");
console.log([1, 2, 3].pop()); // 3
var arr = [1, 2, 3]; 
console.log(arr.pop()); // 3
console.log(arr); // [ 1, 2 ]


console.log();
console.log();
/**
 * Array.prototype.push()
 * Adds one or more elements to the end of an array and returns the new length of the array.
 **/
//example1
console.log("Array.prototype.push()");
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
numbers.push(5, 6, 7);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
//example2
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
/**
 *  Merging two arrays
 */
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']


console.log();
console.log();
/**
 * Array.prototype.reverse()
 * Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
 **/
console.log("Array.prototype.reverse()");
console.log([1, 2, 3]); // [1, 2, 3]
console.log([1, 2, 3].reverse()); // [3, 2, 1]


console.log();
console.log();
/**
 * Array.prototype.shift()
 * Removes the first element from an array and returns that element.
 **/
console.log("Array.prototype.shift()");
console.log([1, 2, 3].shift()); // 1
var arr = [1, 2, 3]; 
console.log(arr.shift()); // 1
console.log(arr); // [ 2, 3 ]


console.log();
console.log();
/**
 * Array.prototype.sort()
 * Sorts the elements of an array in place and returns the array.
 * 
 * arr.sort()
 * arr.sort(compareFunction)
 * 
 **/
console.log("Array.prototype.sort()");
var fruit = ['cherries', 'apples', 'bananas'];
console.log(fruit.sort()); // ['apples', 'bananas', 'cherries']
var scores = [1, 10, 21, 2]; 
console.log(scores.sort()); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.
var things = ['word', 'Word', '1 Word', '2 Words'];
console.log(things.sort()); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
/**
 * compare numbers
 */
function compareNumbers(a, b) {
	return a - b;
}
var numbers = [4, 2, 5, 1, 3, 11, 32, 64];
console.log(numbers.sort()); // [ 1, 11, 2, 3, 32, 4, 5, 64 ]
console.log(numbers.sort(compareNumbers)); // [ 1, 2, 3, 4, 5, 11, 32, 64 ]
// another syntax
numbers.sort(function(a, b) {
	return b - a;
});
console.log(numbers); // [ 64, 32, 11, 5, 4, 3, 2, 1 ]
/**
 * compare non-ASCII characters
 */
//var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
var items = ["oma", "öko"];
console.log(items.sort());
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items);


console.log();
console.log();
/**
 * Array.prototype.splice()
 * Adds and/or removes elements from an array.
 * 
 * array.splice(start) - position where the modificaion is done
 * array.splice(start, deleteCount) - delete number of items from the start position
 * array.splice(start, deleteCount, item1, item2, ...) - add items from the start position 
 * 
 **/
console.log("Array.prototype.splice()");
//array.splice(start)
console.log("*** array.splice(start)");
var myFish = ['anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(2);
console.log("removed");console.log(removed); // [ 'trumpet', 'sturgeon' ]
console.log("myFish");console.log(myFish); // [ 'anemone', 'blue' ]
// array.splice(start, deleteCount)
console.log("*** array.splice(start, deleteCount)");
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
console.log("removed");console.log(removed); // [ 'mandarin' ]
console.log("myFish");console.log(myFish); // [ 'angel', 'clown', 'drum', 'sturgeon' ]
// array.splice(start, deleteCount, item1, item2, ...)
console.log("*** array.splice(start, deleteCount, item1, item2, ...)");
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log("removed");console.log(removed); // [ 'angel', 'clown' ]
console.log("myFish");console.log(myFish); // [ 'parrot', 'anemone', 'blue', 'trumpet', 'sturgeon' ]
// other examples
console.log("*** other examples");
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish);
myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
console.log(myFish); // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
console.log(myFish); // myFish is ["angel", "clown", "mandarin", "sturgeon"]
myFish.splice(2, 1, 'trumpet'); // remove 1 element from index 2, and insert "trumpet"
console.log(myFish); // myFish is ["angel", "clown", "mandarin", "sturgeon"]
var myFish = ['anemone', 'blue', 'trumpet', 'sturgeon', 'parrot'];
var removed = myFish.splice(myFish.length - 3, 2);
console.log("removed");console.log(removed); // [ 'trumpet', 'sturgeon' ]
console.log("myFish");console.log(myFish); // [ 'anemone', 'blue', 'parrot' ]
var myFish = ['anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(-2, 1);
console.log("removed");console.log(removed); // [ 'trumpet' ]
console.log("myFish");console.log(myFish); // [ 'anemone', 'blue', 'sturgeon' ]
var myFish = ['anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(2, 0);
console.log("removed");console.log(removed); // [ ]
console.log("myFish");console.log(myFish); // ['anemone', 'blue', 'trumpet', 'sturgeon']


console.log();
console.log();
/**
 * Array.prototype.unshift()
 * Adds one or more elements to the front of an array and returns the new length of the array. 
 **/
console.log("Array.prototype.unshift()");
var arr = [2, 3];
console.log(arr.unshift(1));
console.log(arr);
var arr = [1, 2];
arr.unshift(0); // result of call is 3, the new array length
console.log(arr); // arr is [0, 1, 2]
arr.unshift(-2, -1); // = 5
console.log(arr); // arr is [-2, -1, 0, 1, 2]
arr.unshift([-3]);
console.log(arr); // arr is [[-3], -2, -1, 0, 1, 2]
arr.unshift({name: 'Tom' });
console.log(arr); // arr is [[-3], -2, -1, 0, 1, 2]