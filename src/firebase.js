import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCr8vnJlM6XxNreyl2ZRJHSAco2s8v_j8U",
//     authDomain: "codebid-auth.firebaseapp.com",
//     projectId: "codebid-auth",
//     storageBucket: "codebid-auth.firebasestorage.app",
//     messagingSenderId: "272160224",
//     appId: "1:272160224:web:3c215710e118ff2fa70785"
//   };



// Check if all this is done, only then auth will be initialized
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default {auth,db};




