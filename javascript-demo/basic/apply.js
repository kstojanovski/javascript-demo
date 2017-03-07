/**
 * Examples about the apply function.
 */
log("apply.js");
function log(){
    if(console){
        console.log.apply(console, arguments);
    }
}
var func = function () {
	return (arguments [0] * arguments [1]);
}
log(func(1, 2));
log(func.apply(this, [1, 2]));