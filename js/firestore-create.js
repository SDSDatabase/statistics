import "https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.3.3/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBXpx8bNix8yUzLTRu_P-_N5wdt3jllTuM",
  authDomain: "statistics-1846f.firebaseapp.com",
  databaseURL:
    "https://statistics-1846f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "statistics-1846f",
  storageBucket: "statistics-1846f.appspot.com",
  messagingSenderId: "168068170143",
  appId: "1:168068170143:web:6676606706ba6b40f67daa",
};
firebase.initializeApp(firebaseConfig);

// ! getReference(fireStore_database)
const db = firebase.firestore();

// ! getReferences(form_elements)
const documentNameInput = document.getElementById("document-name");
const form = document.querySelector("form");
const addFieldButton = document.getElementById("add-field");
let fieldCount = 0;

// ! addFieldBtn.isClicked()
addFieldButton.addEventListener("click", () => {
  const field = document.createElement("div");
  field.innerHTML = `
        <br><br>
        <label for="field-${fieldCount}">Field ${fieldCount + 1}:</label>
        <input type="text" style="width: 30%" id="field-${fieldCount}" name="field-${fieldCount}">
        <p>Please enter the question you wish to ask!</p>
        <br><br>
        <label for="field-${fieldCount}-value">Value:</label>
        <select id="field-${fieldCount}-value" name="field-${fieldCount}-type">
            <option value="string">Text</option>
            <option value="number">Number</option>
        </select>
        <p>Please enter the value this question will take!</p>
        <br><br>
    `;
  form.insertBefore(field, addFieldButton);
  fieldCount++;
});

// ! createDocumentBtn.isClicked()
document.getElementById("create-document").addEventListener("click", (event) => {
  event.preventDefault();

  // ! !isEmpty(input_values)
  if (documentNameInput.value === "") {
    alert("Please enter a collection name and document name");
    return;
  }

  // ! get(input_values)
  const documentName = documentNameInput.value.trim() + "-questionaire";

  // ! Create an object; Holding each's field and value
  const fields = {};
  for (let i = 0; i < fieldCount; i++) {
    const fieldName =
      i + 1 + ". " + document.getElementById(`field-${i}`).value.trim();
    const fieldValue = document.getElementById(`field-${i}-value`).value.trim();
    if (fieldName && fieldValue) {
      fields[fieldName] = fieldValue;
    }
  }

  // ! insert(object).toCollection(Database)
  db.collection('generated-questions').doc(documentName)
    .set(fields)
    .then(() => {
      console.log("Document added to collection successfully");
    })
    .catch((error) => {
      console.error("Error adding document to collection: ", error);
    });
});
