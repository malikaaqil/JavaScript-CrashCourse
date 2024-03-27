let firstName = "Jack ";
let lastName = "Sparrow";
let result = firstName + lastName; // string concatenation

// console.log(result);


// String methods

let data = "The quick brown fox jumps over the lazy dog.";
let dataOne = data.includes("over");           // find a word or a letter.
let dataTwo = data.charAt(0);                  // find the letter by index number.
let dataThree = data.indexOf("r");             // find the letter's index number, "checking from the left-side/ start".
let dataFour = data.lastIndexOf("k")           // find the letter's index number, "checking from the right-side/ end".
let dataSix = data.replace("brown", "white");  // it replaces the specified word or letter.
let dataFive = data.repeat(2);                 // it creates copies and concatenates them together.

// console.log(dataSix);


// num + num = addition
// num + string = concatenation
// string + num = concatenation
// string + string = concatenation

let numOne = "5"; // string
let numTwo = 5; // number

// console.log(numOne + numTwo);

// Math Operators: + - * / %

let num1 = 21;
let num2 = 2;

// console.log(num1 % num2);


// let userName = prompt("Enter Your Name:")
// console.log("Good Evening " + userName);


let randomNumber = Math.random();
randomNumber = randomNumber * 10;
let roundedNumber = Math.round(randomNumber);

// console.log(roundedNumber);


// BODMAS Rule: Bracket, Order, Division, Multiplication, Addition, and Subtraction.

let valueOne = 3 + 4 * 2;  // The BODMAS rule will be applied.
// console.log(valueOne);


let valueTwo = 5 ** 3;  // This code will be treated as the cube of 5, 5^3, example: 5 * 5 * 5.
// console.log(valueTwo);