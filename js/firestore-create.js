import { firebaseDatabase, app } from "./firebase";

const database = app.firestore();

const collectionNameInput = document.getElementById("collection-name");
const documentNameInput = document.getElementById("document-name");
const form = document.querySelector("form");
const addFieldButton = document.getElementById("add-field");
let fieldCount = 1;

addFieldButton.addEventListener("click", () => {
  const field = document.createElement("div");
  field.innerHTML = `
        <label for="field-${fieldCount}">Field ${fieldCount}:</label>
        <input type="text" id="field-${fieldCount}" name="field-${fieldCount}">
        <br><br>
        <label for="field-${fieldCount}-type">Type:</label>
        <select id="field-${fieldCount}-type" name="field-${fieldCount}-type">
            <option value="string">Text</option>
            <option value="number">Number</option>
            <option value="boolean">True/False</option>
        </select>
        <br><br>
        <label for="field-${fieldCount}-value">Value:</label>
        <input type="text" id="field-${fieldCount}-value" name="field-${fieldCount}-value">
        <br><br>
    `;
  form.insertBefore(field, addFieldButton);
  fieldCount++;
});

document
  .getElementById("create-document")
  .addEventListener("click", (event) => {
    event.preventDefault();

    // Get the input values
    const collectionName = collectionNameInput.value.trim();
    const documentName = documentNameInput.value.trim();

    // Check that the input values are not empty
    if (!collectionName || !documentName) {
      alert("Please enter a collection name and document name");
      return;
    }

    // Create an object to hold the fields and their values
    const fields = {};
    for (let i = 1; i < fieldCount; i++) {
      const fieldName = document.getElementById(`field-${i}`).value.trim();
      const fieldType = document.getElementById(`field-${i}-type`).value.trim();
      const fieldValue = document
        .getElementById(`field-${i}-value`)
        .value.trim();
      if (fieldName && fieldValue) {
        switch (fieldType) {
          case "number":
            fields[fieldName] = Number(fieldValue);
            break;
          case "boolean":
            fields[fieldName] = fieldValue.toLowerCase() === "true";
            break;
          default:
            fields[fieldName] = fieldValue;
        }
      }
    }

    // Add the document to the collection
    db.collection(collectionName)
      .doc(documentName)
      .set(fields)
      .then(() => {
        console.log("Document added to collection successfully");
      })
      .catch((error) => {
        console.error("Error adding document to collection: ", error);
      });
  });