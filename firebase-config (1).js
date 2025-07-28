// Import necessary Firebase modules (ES Module version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc3AzkXZW7Rq6WrWNPCsiktmLpSeMxKFI",
  authDomain: "brainzone-eadc5.firebaseapp.com",
  projectId: "brainzone-eadc5",
  storageBucket: "brainzone-eadc5.firebasestorage.app",
  messagingSenderId: "608266082607",
  appId: "1:608266082607:web:fe1a21125347aaa744e9da",
  measurementId: "G-Y557HGLBR5"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

// Export the database object to use in other files
export { db };