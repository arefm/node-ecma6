/**
 * let
 * ====================================================================================================
 * The let statement declares a block scope local variable, optionally initializing it to a value.
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * RUN: node --use-strict let.js
 *
 * STRICT MODE: REQUIRED
 */

//Sample.1
console.log("\n Sample.1");
(function() {
    
    let x = 1;
    
    if (true) {
    	let x = 2;
        console.log("1:", x); //print 2
    }

    console.log("2:", x); //print 1

})();

//Sample.2
console.log("\n Sample.2");
(function(){

	var a = 1,
		b = 2;

	if (a === 1) {
		let a = 3,
			b = 4;
		console.log("1:", a, b);		
	}

	console.log("2:", a, b);

})();
