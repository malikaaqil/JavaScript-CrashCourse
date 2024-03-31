// Functions

// alert, parseInt = Built-in function
// greet  = custom function


// function greet(studentName) {
//     console.log("Hello " + studentName);
// }

// greet("Jorge");
// greet("Samuel");
// greet("Sara");


// function employee(fileNo) {
//     return "Working on file no: " + fileNo
// }

// let data1 = employee(9);
// console.log(data1);

// let data2 = employee(5);
// console.log(data2);

// let data3 = employee(8);
// console.log(data3);


// function addNum(num1, num2) {
//     return num1 + num2
// }

// console.log(addNum(4, 4));
// console.log(addNum(2, 8));


// Recurction

// function write(data, times) {
//     if (times > 0) {
//         document.write(data + "<br>");
//         write(data, times - 1)
//     }
// }

// write("Hello", 5);


// Factorial = 5 * 4 * 3 * 2 * 1;

// function factorial(num) {
//     if (num > 1) {
//         return num * factorial(num - 1)
//     }
//     return 1
// }

// console.log(factorial(5));


// Clouser  = nasted function

// Global Scope =  accessible in whole file
// Local/Function Scope = accessible in function or blocks "{}"


// function print(){
//     return function(message){      // anonymous function or nested function
//         document.write(message)
//     }
// }

// let printMsg = print();
// printMsg("Hello")