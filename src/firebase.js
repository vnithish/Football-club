// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaxQHcmlloBykfOoL4-yXou1XXfemOrSE",
  authDomain: "pro-soccer-school.firebaseapp.com",
  projectId: "pro-soccer-school",
  storageBucket: "pro-soccer-school.appspot.com",
  messagingSenderId: "922714762713",
  appId: "1:922714762713:web:7ffbb1c5ad2e672617fdc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
