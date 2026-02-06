import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7pYPtdxY-GrHBtktrcHxKlv78vqClswM",
  authDomain: "airbnb-b11.firebaseapp.com",
  projectId: "airbnb-b11",
  storageBucket: "airbnb-b11.appspot.com",
  messagingSenderId: "413730144303",
  appId: "1:413730144303:web:56c5fd23d1f40b7a1506da",
  measurementId: "G-FM2CPS77X8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { auth, googleProvider };
