// let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello"

// let myPara = document.querySelector("p");
// myPara.innerHTML = "<strong>Welcome!</strong>"
// console.log(myPara);


// Blinking Animation

// let paraOne = document.querySelector("#para-one");
// paraOne.innerHTML = "<strong>Welcome!</strong>";
// paraOne.style.textAlign = "center";
// paraOne.style.fontSize = "2rem";
// paraOne.style.backgroundColor = "blue";
// paraOne.style.color = "white";

// setInterval(function () {
//     if (paraOne.style.display === "none") {
//         paraOne.style.display = "block"
//     } else {
//         paraOne.style.display = "none"
//     }
// }, 500)



// width increase

// let paraTwo = document.querySelector("#para-two");
// paraTwo.innerHTML = "<strong>Welcome!</strong>";
// paraTwo.style.fontSize = "2rem";
// paraTwo.style.backgroundColor = "purple";
// paraTwo.style.color = "white";
// paraTwo.style.width = "100%"

// setInterval(function () {
//     let paraWidth = paraTwo.style.width;
//     if (paraWidth === "100%") {
//         paraTwo.style.width = "10%"
//     } else {   
//         paraWidth = +paraWidth.replace("%", "");    // example: "30%" => "30" => 30
//         paraTwo.style.width = paraWidth + 10 + "%";
//     }
// }, 500)



// random Colors Generator

let paraThree = document.querySelector("#para-three");
paraThree.innerHTML = "<strong>Welcome!</strong>";
paraThree.style.textAlign = "center";
paraThree.style.fontSize = "2rem";

setInterval(function () {

    let color1 = Math.round(Math.random() * 10000)
    let color2 = Math.round(Math.random() * 10000)

    paraThree.style.backgroundColor = "#" + color1;
    paraThree.style.color = "#" + color2;

}, 500)