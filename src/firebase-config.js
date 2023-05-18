import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBi1SLRfxTQkoxF3JF2woyhoQYxoESoU3k",
  authDomain: "my-blog-5df43.firebaseapp.com",
  projectId: "my-blog-5df43",
  storageBucket: "my-blog-5df43.appspot.com",
  messagingSenderId: "841493029444",
  appId: "1:841493029444:web:14b2a6b1fbe40fba8ad211",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();