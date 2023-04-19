import {database, set, get} from "./firebase.js";

// TODO: Create a function which checks available ID from database and updates it accordingly
var uniqueID; // ! ID used to separate different questions 

// ! References to the HTML page
    // ! HTML input field(s)
var formLabel = document.querySelector("#form-label");
var inputType = document.querySelector("#input-type");
/*(8-9) Value is the question + the type of value it takes in*/

    // ! Buttons
var addBtn = document.querySelector("#add-field");


function AddField() {
    
}

addBtn.addEventListener('click', AddField);