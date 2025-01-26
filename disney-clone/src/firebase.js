// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTvapdNUeniCy10A-1UBu-nqezLy2XnEI",
  authDomain: "disneyplus-clone-129db.firebaseapp.com",
  projectId: "disneyplus-clone-129db",
  storageBucket: "disneyplus-clone-129db.appspot.com",
  messagingSenderId: "900808676729",
  appId: "1:900808676729:web:696726a849cd370fec0ba8",
  measurementId: "G-VQTDRL76K5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { auth, provider, storage, analytics};
export default db;