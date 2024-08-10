// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGKEKBA84GCj8HiZs5VodMXEFOBXTKdRs",
  authDomain: "inventory-management-77808.firebaseapp.com",
  projectId: "inventory-management-77808",
  storageBucket: "inventory-management-77808.appspot.com",
  messagingSenderId: "1065827836684",
  appId: "1:1065827836684:web:ba8f7e3edb79c79ba1df29",
  measurementId: "G-S516K7JMLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};