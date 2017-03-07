/**
 * Examples about the caller function.
 */
function whoCalled() {
   if (whoCalled.caller == null)
      console.log('I was called from the global scope.');
   else
      console.log(whoCalled.caller + ' <-- called me!' + '\n');
}
//entry function scope
whoCalled();

// get global scope
var Function = function(){}.constructor,
global = Function("return this")();

(function (global) {
	//function scope    
    whoCalled();
}(this));

(function (global) {
	// global scope
    'use strict';
    whoCalled();
}(this));