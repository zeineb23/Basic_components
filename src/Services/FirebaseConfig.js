import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6G6nUzV8DHuf4NRj1uhX9LBDuCEHRSf0",
  authDomain: "restaurant-7380d.firebaseapp.com",
  projectId: "restaurant-7380d",
  storageBucket: "restaurant-7380d.appspot.com",
  messagingSenderId: "603157841797",
  appId: "1:603157841797:web:15a68b8ceeb2265354a6ec",
  measurementId: "G-Z0LCFP66J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth, provider};

