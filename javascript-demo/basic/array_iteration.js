/**
 * Iteration methods - other operations
 */
/**
 * Array.prototype.entries()
 * Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 */
console.log("Array.prototype.entries");
var a = ['a', 'b', 'c'];
var iterator = a.entries();
console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']
var iterator = a.entries();
for (let e of iterator) {
  console.log(e);
}


console.log();console.log();
/**
 * Array.prototype.every()
 * Returns true if every element in this array satisfies the provided testing function.
 * 
 * arr.every(callback[, thisArg])
 * 
 */
console.log("Array.prototype.every");
function isBigEnough(element, index, array) { 
  return element >= 10; 
} 

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false 
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true


console.log();console.log();
/**
 * Array.prototype.filter()
 * Creates a new array with all of the elements of this array for which the provided filtering function returns true.
 * 
 * var newArray = arr.filter(callback[, thisArg])
 * 
 */
console.log("Array.prototype.filter()");
function isBigEnough(value) {
	return value >= 10;
}
console.log([12, 5, 8, 130, 44].filter(isBigEnough)); // [12, 130, 44]
/**
 * Array filters items based on search criteria (query)
 */
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
    return fruits.filter(function(el) {
     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
console.log(fruits);
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
/**
 * Array filters items based on search criteria (query)
 * ES2015 Implementation
 */
function filterItems(query) {
    return fruits.filter((el) =>
     el.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
}
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
/**
 * Filtering invalid entries from JSON
 */
var arr = [
  { id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 },
  { }, { id: null }, { id: NaN }, { id: 'undefined' }
];
function filterArrItems() {
    return arr.filter((el) =>
      el.id!== undefined && typeof(el.id) === 'number' && !isNaN(el.id)
    )
}
console.log(filterArrItems());


console.log();console.log();
/**
 * Array.prototype.find()
 * Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
 */
//example 1
console.log("Array.prototype.find()");
function isBigEnough(element) {
	return element >= 15;
}
console.log([12, 5, 8, 130, 44].find(isBigEnough)); // 130
console.log([12, 5, 8, 130, 44].find(el => el >= 15)); // 130
//example 2
var inventory = [ {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0}, {name: 'cherries', quantity: 5}
];
function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
console.log(inventory.find(fruit => fruit.name === 'cherries')); // { name: 'cherries', quantity: 5 }
//example 3
function isPrime(element, index, array) {
  var start = 2, sqrt = Math.sqrt(element);
  while (start <= sqrt) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
console.log([4, 5, 8, 12].find(el => {
  var start = 2, sqrt = Math.sqrt(el);
  while (start <= sqrt) {
    if (el % start++ < 1) {
      return false;
    }
  }
  return el > 1;
})); // 5


console.log();console.log();
/**
 * Array.prototype.findIndex()
 * Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
 * 
 * arr.findIndex(callback[, thisArg])
 */
console.log("Array.prototype.findIndex()");
function isBigEnough(element) {
	return element >= 15;
}
console.log([12, 5, 8, 130, 44].findIndex(isBigEnough));
console.log([12, 5, 8, 130, 44].findIndex(el => el >= 15));
console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2


console.log();console.log();
/**
 * Array.prototype.forEach()
 * Calls a function for each element in the array.
 */
console.log("Array.prototype.forEach()");
var a = ['a', 'b', 'c'];
a.forEach(function(element) {
    console.log(element);
});
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
[2, 5, , 9].forEach(logArrayElements);
[2, 5, , 9].forEach((el, index) => console.log('a[' + index + '] = ' + el));


console.log();console.log();
/**
 * Array.prototype.keys()
 * Returns a new Array Iterator that contains the keys for each index in the array.
 */
console.log("Array.prototype.keys()");
var arr = ['a', 'b', 'c'];
var iterator = arr.keys();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]


console.log();console.log();
/**
 * Array.prototype.map()
 * Creates a new array with the results of calling a provided function on every element in this array.
 * 
 * var new_array = arr.map(callback[, thisArg])
 */
console.log("Array.prototype.map()");
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x) {
   return x * 2;
});
console.log(numbers); // numbers is still [1, 5, 10, 15]
console.log(roots); // roots is now [2, 10, 20, 30]
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(numbers); // numbers is still [1, 4, 9]
console.log(roots); // roots is now [1, 2, 3]
//example
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers); // [1, 4, 9]
console.log(doubles); // [2, 8, 18]
//example
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) {
  return x.charCodeAt(0); 
});
console.log(a);// [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
//example
var str = '12345';
var rts = Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join(''); 
console.log(str); console.log(rts);
//example
console.log(['1', '2', '3'].map(parseInt));
console.log(['1', '2', '3'].map(Number));

		
console.log();console.log();
/**
 * Array.prototype.reduce()
 * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
 * 
 * arr.reduce(callback, [initialValue])
 */
console.log("Array.prototype.reduce()");
var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);
// sum is 6
console.log(sum);
var list1 = [[0, 1], [2, 3], [4, 5]];
var list2 = [0, [1, [2, [3, [4, [5]]]]]];
const flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);
console.log(flatten(list1)); // [0, 1, 2, 3, 4, 5]
console.log(flatten(list2)); // [0, 1, 2, 3, 4, 5]
//example
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
console.log(flattened); // [0, 1, 2, 3, 4, 5]
//example
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames); //{ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
console.log(countedNames['Alice']);
//example
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);
console.log(allbooks);


console.log();console.log();
/**
 * Array.prototype.reduceRight()
 * Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
 * 
 * arr.reduceRight(callback[, initialValue])
 * 
 */
console.log("Array.prototype.reduceRight()");
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
console.log(flattened); // [4, 5, 2, 3, 0, 1]
var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
console.log(sum); // sum is 6
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
console.log(flattened); // flattened is [4, 5, 2, 3, 0, 1]
//Difference between reduce and reduceRight
var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 
console.log(left);  // "12345"
console.log(right); // "54321"


console.log();console.log();
/**
 * Array.prototype.some()
 * Returns true if at least one element in this array satisfies the provided testing function.
 */
console.log("Array.prototype.some()");
//example
console.log("example 0");
function isBiggerThan10(element, index, array) {
  return element > 10;
}
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true
console.log([2, 5, 8, 1, 4].some(x => x > 10));  // false
console.log([12, 5, 8, 1, 4].some(x => x > 10)); // true
// example
console.log("example 1");
var fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}
console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true
// example
console.log("example 2");
var fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}
console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true
// example
console.log("example 3");
var TRUTHY_VALUES = [true, 'true', 1];
function getBoolean(a) {
  'use strict';
  var value = a;
  if (typeof value === 'string') { 
    value = value.toLowerCase().trim();
  }
  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}
console.log(getBoolean(false)); // false
console.log(getBoolean('false')); // false
console.log(getBoolean(1)); // true
console.log(getBoolean('true')); // true


console.log();console.log();
/**
 * Array.prototype[@@iterator]()
 * Returns a new Array Iterator object that contains the values for each index in the array.
 */
//Iteration using for...of loop
console.log("Array.prototype[@@iterator]()");
console.log('example 0');
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let letter of eArr) {
  console.log(letter);
}
//Alternative iteration
console.log('example 1');
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p