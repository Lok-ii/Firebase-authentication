// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DDdWVyaOsCoj6GrN6VRCTwyDaR766NQ",
  authDomain: "fir-auth-7185f.firebaseapp.com",
  projectId: "fir-auth-7185f",
  storageBucket: "fir-auth-7185f.appspot.com",
  messagingSenderId: "802797173166",
  appId: "1:802797173166:web:b60d818f5b4267552f703f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
