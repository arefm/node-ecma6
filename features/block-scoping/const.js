/**
 * const
 * ====================================================================================================
 * The const declaration creates a read-only reference to a value. It does not mean the value it holds 
 * is immutable, just that the variable identifier cannot be reassigned.
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * RUN: node const.js
 *
 * STRICT MODE: NOT REQUIRED
 */

//Sample.1
console.log("\n Sample.1");
(function() {
    
    const fullname = "john doe";

    console.log("fullname-1: ", fullname);

    // fullname = "jenny doe"; // if set returns SyntaxError: Identifier 'fullname' has already been declared

    console.log("fullname-2: ", fullname);

})();
