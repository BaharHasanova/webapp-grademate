
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLv1DiRB6egmpaoIKfjODXZF5fYheQKIM",
    authDomain: "realtimedatabasetest-f226a.firebaseapp.com",
    databaseURL:
      "https://realtimedatabasetest-f226a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtimedatabasetest-f226a",
    storageBucket: "realtimedatabasetest-f226a.appspot.com",
    messagingSenderId: "348704796176",
    appId: "1:348704796176:web:38994c5ab4d54b752ce495",
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;