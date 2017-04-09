/**
 * In JavaScript, arrays use numbered indexes.
 * In JavaScript, objects use named indexes.
 */
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);
console.log(cars.length);
cars.sort();
console.log(cars);
for (i = 0; i < cars.length; i++) {
	console.log(cars[i]);	
}
cars.push("VW");
cars[cars.length] = "Ford";
var carsCon = cars.concat("Seat", "Audi");
console.log(carsCon);
console.log(cars);
console.log(Array.isArray(cars));
console.log(cars instanceof Array );
cars.forEach(function(element) {
    console.log(element);
}); 