// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUEPkDWf24mwC_Gsl7eMf6bXIlGMhv9ck",
    authDomain: "genius-car-services-b28b6.firebaseapp.com",
    projectId: "genius-car-services-b28b6",
    storageBucket: "genius-car-services-b28b6.appspot.com",
    messagingSenderId: "341164966098",
    appId: "1:341164966098:web:dc870013da41356bd72d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;