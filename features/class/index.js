/**
 * class
 * ====================================================================================================
 * JavaScript classes are introduced in ECMAScript 6 and are syntactical sugar over JavaScript's existing 
 * prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model 
 * to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal 
 * with inheritance.
 * Note: (Hoisting)
 * An important difference between function declarations and class declarations is that function declarations 
 * are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise 
 * code will throw a ReferenceError
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * RUN: node --use-strict index.js
 *
 * STRICT MODE: REQUIRED
 */

// Sample.1
console.log("\n Sample.1: Single Class");
class Polygon {

    /**
     * `constructor` method
     * ==================================================
     * The constructor method is a special method for creating and initializing an object created with a class. 
     * There can only be one special method with the name "constructor" in a class. 
     * A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
     * 
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * `prototype` methods
     * ==================================================
     * class normal methods, you can call them after making an instance of parent class.
     * example: 
     *     var myPoly = new Polygon(100, 200);
     *     myPoly.calcArea(); //returns 20000
     * 
     */
    calcArea() {
        return this.width * this.height;
    }

    /**
     * methods with `get` keyword (getter)
     * ==================================================
     * you can not set any arguments when you calling this methods. also you don't have to 
     * use parentheses in front of method name.
     * example:
     *     var myPoly = new Polygon(100, 200);
     *     myPoly.area; //returns 20000
     * 
     */
    get area() {
        return this.calcArea();
    }

    /**
     * methods with `set` keyword (setter)
     * ==================================================
     * example:
     *     var myPoly = new Polygon(100, 200);
     *     myPoly.uname = "johndoe"; //it will be set username
     * 
     */
    set uname(value) {
    	this.username = value;
    }

    get uname() {
    	return "username is " + (this.username || 'not set yet.');
    }

    /**
     * methods with `static` keyword
     * ==================================================
     * The static keyword defines a static method for a class. Static methods are called without instantiating their 
     * class and are also not callable when the class is instantiated. Static methods are often used to create utility 
     * functions for an application.
     * example:
     *     Polygon.sayMyName('john'); //return "hello john";
     * 
     */
    static sayMyName(name) {
        return "hello " + name;
    }

}

// making a new instance of Polygon class
const myPoly = new Polygon(360, 270);