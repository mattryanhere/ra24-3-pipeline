// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin";
import express from 'express';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpbvT2DAzMT_mNzUYGP4WMHWswJ-NnWN0",
  authDomain: "ra24-3-pipeline.firebaseapp.com",
  projectId: "ra24-3-pipeline",
  storageBucket: "ra24-3-pipeline.firebasestorage.app",
  messagingSenderId: "244314280380",
  appId: "1:244314280380:web:56deda8221b7f3b2f2dbb9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//initialize express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});