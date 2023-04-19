// import {database, set, get} from "./firebase.js";

// TODO: Create a function which checks available ID from database and updates it accordingly
// var uniqueID = 0; // ! ID used to separate different questions
const formFields = document.querySelector(".form-fields");
var inputCounter = 0;
    // ! Buttons
var addBtn = document.querySelector("#add-field");
var finalizeBtn = document.querySelector("#finalize-form");

function AddField() {
    let formLabel = document.querySelector("#form-label").value;
    let inputType = document.querySelector("#input-type").value;

    const inputAttribute = `input-${inputCounter}`;
    inputCounter++;

    const label = document.createElement('label');
    label.textContent = formLabel;
    label.setAttribute('for', inputAttribute);

    const input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("id", inputAttribute);
    input.setAttribute("name", inputAttribute);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      label.remove();
      input.remove();
      deleteButton.remove();
    });

    const field = document.createElement("div");
    field.appendChild(label);
    field.appendChild(input);
    field.appendChild(deleteButton);

    formFields.appendChild(field);
}

function FinalizeForm(){
    document.querySelector("form").classList.add("hidden");
    document.querySelector("#view-form").classList.remove("hidden");
    console.log(formFields.innerHTML);
}

addBtn.addEventListener('click', AddField);
finalizeBtn.addEventListener('click', FinalizeForm);