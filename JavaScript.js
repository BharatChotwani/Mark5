var btnTranslate = document.querySelector("#first-btn");
var textTranslate = document.querySelector("#txt-box");
var textOutput = document.querySelector("#txt-output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
};

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
};

function clickHandler() {
    // textOutput.innerText = "bhbhbh " + textTranslate.value
    var inputText = textTranslate.value  // texting input

    fetch(getTranslationURL(inputText))
      .then (response => response.json())
      .then (json => console.log(json.contents.translated))
      .catch (errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)