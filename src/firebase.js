import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByIyXZrIvGUJSWqQN82H_swaM_0QBk05w",
  authDomain: "studentapp-79d23.firebaseapp.com",
  projectId: "studentapp-79d23",
  storageBucket: "studentapp-79d23.appspot.com",
  messagingSenderId: "647961862475",
  appId: "1:647961862475:web:1ce2dfe375b2036a0c88ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
