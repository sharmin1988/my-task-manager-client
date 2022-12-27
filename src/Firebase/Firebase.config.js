// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5_NuijIjqWqJ8FvwjSTc5LGvu5rtf_4",
  authDomain: "my-task-manager-bd345.firebaseapp.com",
  projectId: "my-task-manager-bd345",
  storageBucket: "my-task-manager-bd345.appspot.com",
  messagingSenderId: "428743602315",
  appId: "1:428743602315:web:b7f26bf97ceda3dc3b248e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app