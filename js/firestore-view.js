import "https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.3.3/firebase-firestore.js";

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

const db = firebase.firestore();
const selectElement = document.getElementById("firestore-collection-dd");
const formContainer = document.getElementById("form-container");
const submitBtn = document.getElementById("submit-btn");

// Populate select element with document IDs
db.collection("generated-questions")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const option = document.createElement("option");
      option.value = doc.id;
      option.text = doc.id;
      selectElement.add(option);
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

selectElement.addEventListener("change", (event) => {
  const selectedForm = event.target.value;
  db.collection("generated-questions")
    .doc(selectedForm)
    .get()
    .then((doc) => {

      const data = doc.data();
      formContainer.innerHTML = "";
      const form = document.createElement("form");

      Object.keys(data).forEach((key) => {
        const question_div = document.createElement('div');
        question_div.classList = "question-div";
        const label = document.createElement("label");
        label.classList = "question-label";
        label.textContent = `${key}: `;
        const input = document.createElement("input");
        input.classList = "answer-label";
        input.type = "text";
        input.name = key;

        question_div.appendChild(label);
        question_div.appendChild(input);
        form.appendChild(question_div);
      });

      formContainer.appendChild(form);

      submitBtn.addEventListener("click", (event) => {

        event.preventDefault();
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData);

        db.collection("generated-questions")
          .doc(selectedForm)
          .collection("user-inputs")
          .add(formObject)
          .then(() => {
            console.log("Form submitted successfully!");
          })
          .catch((error) => {
            console.log("Error submitting form: ", error);
          });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
});