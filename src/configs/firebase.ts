import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxMH2XqWOH3KZ72dRznVVrGXc0ycgqGDs",
  authDomain: "airbnb-b18.firebaseapp.com",
  projectId: "airbnb-b18",
  storageBucket: "airbnb-b18.firebasestorage.app",
  messagingSenderId: "909161573982",
  appId: "1:909161573982:web:0049c61f6aea9be5fd0ecf",
  measurementId: "G-MPXE6TKQ4B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { auth, googleProvider };
