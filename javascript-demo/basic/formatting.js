/**
 * examples of formatting which works in any browser 
 * but not in eclipse NEON with nodejs.
 */
/**
 * parseFloat and toFixed
 */
var a = parseFloat("10") + " ";
var b = parseFloat("10.00") + " ";
var c = parseFloat("10.33") + " ";
var d = parseFloat("34 45 66") + " ";
var e = parseFloat("   60   ") + " ";
var f = parseFloat("40 years") + " ";
var g = parseFloat("He was 40") + " ";
var h = parseFloat("97.24624").toFixed(2) + " ";
var i = parseFloat("97").toFixed(2) + " ";
var j = parseFloat("97").toFixed(2).toLocaleString('de-DE') + " ";
var n = a + b + c + d + e + f + g + h + i + j;
console.log(n);


/**
 * Intl.NumberFormat work when used in browser
 */
var last = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(parseFloat("97"))
console.log(last);


/**
 * number.toLocaleString
 */
var number = 123456.789;
//Währungsformat
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
//→ 123.456,79 €
//Der Japanische Yen hat keine Unterwährung (z. B. Cent) 
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
//→ ￥123,457
//Limitiert auf drei signifikante Stellen 
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
//→ 1,23,000