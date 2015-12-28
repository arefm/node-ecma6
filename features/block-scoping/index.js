/**
 * let
 * ====================================================================================================
 * The let statement declares a block scope local variable, optionally initializing it to a value.
 * 
 */

(function letTest() {
    
    let x = 31;
    
    if (true) {
    	let x = 25;
        console.log("1:", x); //print 25
    }

    console.log("2:", x); //print 31

})();
