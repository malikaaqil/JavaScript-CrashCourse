// let userFavNum = +prompt("Ente your favorite number");   // The prompt method returns a string.
// console.log(userFavNum + 2);


// Comparison operators: 

//  ==      :   check only value.
//  ===    :   check both the value and data type.
//  !=     :   The not equal comparison operator checks only the value, not the data type, like ==.
//  !==    :   The strict not equal comparison operator checks both the value and data type, similar to ===.
//  >      :   checks if the left value is greater than the right value.
//  >=     :   checks if the left value is greater than or equal to the right value.
//  <      :   checks if the left value is less than the right value.
//  <=     :   checks if the left value is less than or equal to the right value.

// console.log(2 == "2");     // true
// console.log(2 === "2");    // false
// console.log(2 != "2");     // false
// console.log(2 !== "2");     // true
// console.log(23 > 22);  // true
// console.log(23 < 22);  // false
// console.log(23 >= 23);  // true
// console.log(23 <= 23);  // true


// if else 

// let requiredAge = 10;
// let userAge = +prompt("Enter your age:");

// if (userAge <= requiredAge) {

//     console.log("Welcome!");
// }else{
//     console.log("You are not eligible!!");
// }


// let userNum = +prompt("Guess a number between 1 to 10!")
// let randomNum = Math.floor((Math.random() * 10) + 1)

// if (userNum === randomNum) {
//     console.log("You Win! " + randomNum);

// } else {
//     console.log("You lose! " + randomNum);

// }


// for loop

// 1. initialization
// 2. condition
// 3. code execute
// 4. increment

// let userTable = +prompt("Enter a number to print table:")

// for (let i = 1; i <= 10; i++) {

//     document.write(userTable + " x " + i + " = " + userTable * i + "<br>")
// }