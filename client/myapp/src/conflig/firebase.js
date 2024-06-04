// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO6iMADEHruNBkzE4RUXL1sjcYWbF-SwY",
  authDomain: "milk-management-3d29c.firebaseapp.com",
  projectId: "milk-management-3d29c",
  storageBucket: "milk-management-3d29c.appspot.com",
  messagingSenderId: "454524244115",
  appId: "1:454524244115:web:daac55f6410c2477b17d66",
  measurementId: "G-SB9T8Z569F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};
