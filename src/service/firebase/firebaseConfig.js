import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD0_kXQFH5uE-e6Cj_BYsS1K11CJHmyLtc",
  authDomain: "react-trabajo-final-52a25.firebaseapp.com",
  projectId: "react-trabajo-final-52a25",
  storageBucket: "react-trabajo-final-52a25.appspot.com",
  messagingSenderId: "889322216241",
  appId: "1:889322216241:web:172f487b79d78838532e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)