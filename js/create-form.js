import { database, set, get, ref } from "./firebase.js";


const formFields = document.querySelector(".form-fields");
var inputCounter = 0;
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
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.addEventListener("click", () => {
      label.remove();
      input.remove();
      deleteButton.remove();
    });

    const field = document.createElement("div");
    field.setAttribute('class', "questions");
    field.appendChild(label);
    field.appendChild(input);
    field.appendChild(deleteButton);

    formFields.appendChild(field);
}

function FinalizeForm(){
    document.querySelector("form").classList.add("hidden");
    document.querySelector("#view-form").classList.remove("hidden");
    let buttons = document.querySelectorAll(".delete-btn");
    while (buttons.length > 0) {
      buttons[0].remove();
      buttons = document.querySelectorAll(".delete-btn");
    }
    let formDiv = formFields.innerHTML;
    AddToFirebaseDatabase(formDiv);
}

function AddToFirebaseDatabase(value){
    let uniqueID = 0;
    let idExists = true;

    while(idExists){
        get(ref(database, "Forms/" + uniqueID))
        .then((snapshot) =>{
            if(!snapshot.exists()){
                // ! Condition: A unique ID has not been taken
                idExists = false;
                set(ref(database, "Forms/" + uniqueID), {
                    ID: uniqueID,
                    // TODO: Add a name input to add the name of the form
                    Form: value
                })
            } else {
                // ! Condition: A unique ID has already been taken
                uniqueID++;
            }
        })
    }
}

addBtn.addEventListener('click', AddField);
finalizeBtn.addEventListener('click', FinalizeForm);