/**
 * http://usejsdoc.org/
 * http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
 */
console.log('CLOSURES DONE WRONG');

function createClosureArray() {
    var badArr = [];

    for (var index = 0; index < 10; index++) {
        badArr[index] = function () {
            return 'n = ' + index;
        };
    }
    return badArr;
}

var badArr = createClosureArray();

//badArr is and array of 10 with the following function
//function () {
//return 'n = ' + index;
//}
// beside that in createClosureArray scope the index is 10

for (var index in badArr) {
    console.log(badArr[index]());
}