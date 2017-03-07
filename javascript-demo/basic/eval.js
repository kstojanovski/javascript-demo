/**
 * Examples about eval
 */
//Evaluate/Execute JavaScript code/expressions
//The eval() function evaluates JavaScript code represented as a string.
log("eval.js");
function log(){
    if(console){
        console.log.apply(console, arguments);
    }
}
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
log(a);
var b = eval("2 + 2") + "<br>";
log(b);
var c = eval("x + 17") + "<br>";
log(c);
var res = a + b + c;
log(res);
//simple 
var x = 2;
var y = 39;
var z = '42';
log(eval('x + y + 1'));
log(eval(z));
//Using eval to evaluate a string of JavaScript statements
var x = 5;
var str = "if (x == 5) {log('z is 42'); z = 42;} else z = 0;";
log('z is', eval(str));
//Last expression is evaluated
var str = 'if ( a ) { 1 + 1; } else { 1 + 2; }';
var a = true;
var b = eval(str);
log('b is : ' + b);
a = false;
b = eval(str);
log('b is : ' + b);
//eval as a string defining function requires "(" and ")" as prefix and suffix
var fctStr1 = 'function a() {}'
var fctStr2 = '(function a() {})'
var fct1 = eval(fctStr1)
log(fct1);
var fct2 = eval(fctStr2)
log(fct2);
