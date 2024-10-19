// app.js
import { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import multiply from './mathModule.js';  
import { findMax, reverseArray } from './arrayModule.js';  



console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('Subtract: ', subtract(10, 4));  // Test your subtract function
console.log('Lowercase: ', toLowerCase('HELLO'));  // Test string manipulation
console.log('Multiply: ', multiply(4, 5));  // Test your multiply function


 console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
 console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray

addAndLogUpper(10, 20);  // Test the new function