import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDY5Bqxb-ONJ_yIyPkvM9s6UhTehbDiDdg",
//   authDomain: "sahayogngo-d3839.firebaseapp.com",
//   databaseURL: "https://sahayogngo-d3839-default-rtdb.firebaseio.com/",
//   projectId: "sahayogngo-d3839",
//   storageBucket: "sahayogngo-d3839.firebasestorage.app",
//   messagingSenderId: "788822487122",
//   appId: "1:788822487122:web:8a366ecef5f865c1f32f8b",
//   measurementId: "G-VQVZPN7RTV"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyAuNwvEfgeTMpJdEZhVkWJpX0PjZwdXQVM",
//   authDomain: "login-page-923f8.firebaseapp.com",
//   databaseURL: "https://login-page-923f8-default-rtdb.firebaseio.com/",
//   projectId: "login-page-923f8",
//   storageBucket: "login-page-923f8.firebasestorage.app",
//   messagingSenderId: "784857233109",
//   appId: "1:784857233109:web:594bb2dfe13780a0e4545c"
// };


// Check if all this is done, only then auth will be initialized
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default {app,auth};



