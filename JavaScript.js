var btnTranslate = document.querySelector("#first-btn");
var textTranslate = document.querySelector("#txt-box");
var textOutput = document.querySelector("#txt-output")



function clickHandler() {
    console.log("clicked happen");
    console.log("input", textTranslate.value);
    } 

btnTranslate.addEventListener("click", clickHandler)