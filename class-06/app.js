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


let getStudents = localStorage.getItem("studentsData");
let students = getStudents ? JSON.parse(getStudents) : [];


function addStudents() {

    let student = {
        name: prompt("Enter your name: "),
        studentID: +prompt("Enter ID: "),
        className: prompt("Enter your class name: ")
    }
    students.push(student);

    let stringify = JSON.stringify(students);
    localStorage.setItem("studentsData", stringify);

    console.log(students);

    for (let i = 0; i < students.length; i++) {
        console.log(`
        ${i}: Student Name: ${students[i]["name"]},
        ID: ${students[i]["studentID"]},
        Class Name: ${students[i]["className"]}
        `);
    }
}