import {database, set, get} from "./firebase.js";

// TODO: Create a function which checks available ID from database and updates it accordingly
// var uniqueID = 0; // ! ID used to separate different questions
var inputCounter = 0;
    // ! Buttons
var addBtn = document.querySelector("#add-field");


function AddField() {
    // TODO: Create variables that takes the value
    let formLabel = document.querySelector("#form-label");
    let inputType = document.querySelector("#input-type");

    const inputAttribute = `input-${inputCounter}`;
    inputCounter++;

    const label = document.createElement('label');
    label.textContent = formLabel;
    label.setAttribute('for', inputAttribute);

    const input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("id", inputAttribute);
    input.setAttribute("name", inputAttribute);
}

// ? Not sure if this is needed; Will keep it for time being
function AddToBody(content){
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML += content;
}

addBtn.addEventListener('click', AddField);