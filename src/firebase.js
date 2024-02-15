// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0vV5H00SBHHRdbUjYOFXKairNLuyn_ks",
  authDomain: "cha-de-casa-nova-78b79.firebaseapp.com",
  projectId: "cha-de-casa-nova-78b79",
  storageBucket: "cha-de-casa-nova-78b79.appspot.com",
  messagingSenderId: "622027190554",
  appId: "1:622027190554:web:80c83807dd64903d2cfca3"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { firebaseApp }