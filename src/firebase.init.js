import { initializeApp } from "firebase/app";
import getAuth from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCaetmIGsSNSEzuukBhdOOn4C8MDKerQyA",
    authDomain: "emajohn-private-route-9f868.firebaseapp.com",
    projectId: "emajohn-private-route-9f868",
    storageBucket: "emajohn-private-route-9f868.appspot.com",
    messagingSenderId: "141263154006",
    appId: "1:141263154006:web:3c69c16d1e73aec43284f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth; 