var btnTranslate = document.querySelector("#first-btn");
var textTranslate = document.querySelector("#txt-box");
var textOutput = document.querySelector("#txt-output")


function clickHandler() {
    textOutput.innerText = "bhbhbh " + textTranslate.value
    } 

btnTranslate.addEventListener("click", clickHandler)