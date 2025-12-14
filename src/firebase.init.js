// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSVdloT5h5HN8MthXKp_z-kzAppsNfJvs",
    authDomain: "fir-auth-test-d3610.firebaseapp.com",
    projectId: "fir-auth-test-d3610",
    storageBucket: "fir-auth-test-d3610.firebasestorage.app",
    messagingSenderId: "757586741366",
    appId: "1:757586741366:web:582d5cfa2348bf7567f757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);