// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBXpx8bNix8yUzLTRu_P-_N5wdt3jllTuM",
authDomain: "statistics-1846f.firebaseapp.com",
databaseURL: "https://statistics-1846f-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "statistics-1846f",
storageBucket: "statistics-1846f.appspot.com",
messagingSenderId: "168068170143",
appId: "1:168068170143:web:6676606706ba6b40f67daa"
};

const app = initializeApp(firebaseConfig);

// ! Realtime Database
const firebaseDatabase = getDatabase();
export{firebaseDatabase, set, get, update, remove, ref, child}


