/**
 * Throttling is needed when code is executed periodically and the execution
 * rate can not be controlled.
 * Note: It is very difficult to test the behavior here in this environment.
 * The second example has also an HTMl example.
 */
/**
 * Simple example
 */
var processor = {
	timeoutId : null,
	performProcessing : function() {
		console.log("performProcessing");
	},
	process : function() {
		clearTimeout(this.timeoutId);
		var that = this;
		this.timeoutId = setTimeout(function() {
			that.performProcessing();
		}, 10);
	}
};
for(i = 0; i < 100; i++) {
	processor.process();
}

/**
 * Invoking myFunction in for-loop only gives one output.
 * Invoking myAlert in for-loop gives 100 outputs.
 */
function throttle(method, context) {
	try {
		clearTimeout(method.tId);
    } catch (e) {
    } 
	method.tId = setTimeout(function(){
		method.call(context);
	}, 1000); 
}
function myAlert() {
	setTimeout(function(){ console.log("Hello"); }, 1000);
}
function myFunction() {
     throttle(myAlert, this);
}
for(i = 0; i < 100; i++) {
	myFunction();
}
/**
*can be better tested within HTML where the time of the method.tId function is changed.
*/
//<!DOCTYPE html>
//<html>
//<body>
//<p>Click the button to wait 1 seconds, then alert "Hello".</p>
//<button onclick="myFunction()">Try it</button>
//<script>
//function throttle(method, context) {
//	try {
//		clearTimeout(method.tId);
//    } catch (e) {
//    } 
//	method.tId = setTimeout(function(){
//		method.call(context);
//	}, 1000); 
//}
//function myAlert() {
//	setTimeout(function(){ alert("Hello"); }, 1000);
//}
//function myFunction() {
//     throttle(myAlert, this);
//}
//</script>
//</body>
//</html>
