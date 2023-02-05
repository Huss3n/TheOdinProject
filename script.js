/*
variables 
let 
const - for constants

*/

// exercise one
console.log(23 + 97);

// 2
function troubleshooting() {
  const a = 1;
  const b = 2;
  let result;
  result = 1 + b;
  return result;
}

let add = troubleshooting();
console.log(add);
/**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you.
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 *
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */
const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
console.log(a, b, c, d, e);

/**
	Step 1:
	 Take a look at this code and try to predict what it's going to do before running it...
	
	After making your guess, press 'run' at the top and take a look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.

	Step 2:
	Once you have a good handle on the code snippet, delete the code then follow the following instructions between the lines and try to recreate the snippet on your own.
	---------------------------------------------------------------
	4 variables: first name, last name, current year, and birth year.
	a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
	print the greeting with console.log
	---------------------------------------------------------------
	Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to run the code to make sure the code still works!

	Step 3:
	Add 2 more variables: "fullName" and "age"

	Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something like this: "Hello, my name is " + fullName)

	Do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the greeting.
	
	===== NOTE ====
	In order to make the tests pass you will need to use these exact values for the years and names.  The wording needs to be exact.  If the tests fail, check spacing and punctuation:
	
	birthYear = 1948
	thisYear = 1965
	firstName = Carlos
	lastName = Stevenson

	The greeting should say "Hello! My name is Carlos Stevenson and I am 17 years old."
*/

// const birthYear = 1948;
// const thisYear = 1965;
// const firstName = "Carlos";
// const lastName = "Stevenson";
const firstName = "carlos";
const lastName = "stevenson";
const currentYear = 2022;
const birthYear = 1948;
const fullName = firstName + " " + lastName;
const age = currentYear - birthYear;
const greet = `hi, my name is ${firstName} ${lastName} and i am ${
  currentYear - birthYear
} years old`;
console.log(greet);

const editedGreet = `Hi, my name is ${fullName} and i am ${age} years old`;
console.log(editedGreet);

// functions assignments
function add7(number) {
  return number + 7;
}

console.log(add7(10));

// 2
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(12, 10));

// capitalize
function capitalize(sentence) {
  const cap = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  return cap;
}
console.log(capitalize("i am really happy"));
