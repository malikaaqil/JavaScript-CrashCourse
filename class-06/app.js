// Objects

// let person = {                        // person  = object.
//     name: "Malik",                    // name: "Malik" = property.
//     cnic: 123456789,                  // cnic = key.
//     eyeColor: "black",                // "black": value.
//     canSpeakEnglish: true,
//     speak: function (sentence) {
//         return sentence + this.name
//     }
// }

// console.log(person.eye Color);
// console.log(person.speak("Hello, I'm "));


// let animal = {
//     name: "Cat",
//     color: "Orange",  // Garfield cat.
//     canTalk: true
// }

// console.log(animal["color"]);


// Array of Objects


let students = [];
function addStudents() {
    let student = {
        name: prompt("Enter your name: "),
        studentID: +prompt("Enter your Student ID: "),
        className: prompt("Enter your class name: ")
    }
    students.push(student);
    console.log(students);
}





