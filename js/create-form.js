import { database, set, ref } from "./firebase.js";

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
  let formName = document.querySelector("#form-name").value;
  document.querySelector("form").classList.add("hidden");
  document.querySelector("#view-form").classList.remove("hidden");
  let buttons = document.querySelectorAll(".delete-btn");
  
  while (buttons.length > 0) {
    buttons[0].remove();
    buttons = document.querySelectorAll(".delete-btn");
  }

  let formDiv = formFields.innerHTML;
  console.log(formDiv);
  AddToFirebaseDatabase(formName, formDiv);
}

function AddToFirebaseDatabase(name, form){
  set(ref(database, "Forms/" + name), {
      Name_of_form: name,
      Form: form
  });
}

addBtn.addEventListener('click', AddField);
finalizeBtn.addEventListener('click', FinalizeForm);