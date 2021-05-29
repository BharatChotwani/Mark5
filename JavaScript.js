var btnTranslate = document.querySelector("#first-btn");
var textTranslate = document.querySelector("#txt-box");


function clickHandler() {
    console.log("clicked happen");
    console.log("input", textTranslate.value);
    } 

btnTranslate.addEventListener("click", clickHandler)
