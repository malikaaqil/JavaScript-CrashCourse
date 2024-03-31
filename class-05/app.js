// Array

// index = index is the address of the value, starts from 0.
// length = length is the quantity of the elements, starts from 1.

// let january = "January";
// let february = "February";

// let months = ["January", "February", "March", "text", "April", "May", "June"];
// console.log(months);

// months[6] = "July";  // not recommended.
// console.log(months);


// let shouldIStore = prompt("Add July in Arry? yes/no");
// if (shouldIStore === "yes") {
//     months.push("July")
// }
// console.log(months);


// months.shift();                        // removes 1st index.
// months.unshift();                     // add value on 1st index.
// months.push();                       // add value on last index.
// months.pop();                       // remove last index.
// months.slice();                    // remove or replace.
// months.splice(3, 1, "newText");   // provide a new copy of array.

// let newArr = months.slice(2, 4);
// console.log(newArr);


// let fruits = ["Apple", "Mango", "Orange"]

// fruits.forEach(function (value, index) {   /// loops through array values
//     console.log(index, value);
// })


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filteredArr = arr.filter(function (value) {   // filters array values.
//     if (value % 2 === 0) {
//         return value;
//     }
// })

// console.log(filteredArr);


// let arr = [3, 6, 2, 10, 5, 8, 1, 9, 4];

// let sortedArr = arr.sort(function (val1, val2) {   // sort the values of the array.
//     if (val1 > val2) {
//         return 1;   // 1 represent true
//     } else {
//         return -1;
//     }
// })

// console.log(sortedArr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total = arr.reduce(function (prevValue, currValue) {
//     return prevValue + currValue;
// }, 0)     // answer will a number so, 0 is the default value for prevValue.

// console.log(total);


// let arr = ["Happy", "New", "Year!"];

// let newArr = arr.reduce(function (prevValue, currValue) {
//     return prevValue + " " + currValue;
// }, "")     // Now the answer will be a string, so an empty string is the default value for prevValue.

// console.log(newArr);



// same with forEach mathod

// let newArr = "";

// arr.forEach(function (value) {
//     return newArr = newArr + " " + value;
// })

// console.log(newArr);