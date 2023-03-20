import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCy4UJ5oSMGmfh-ihbD-71VKErVb3qABq8",
    authDomain: "authentication-app-6a1e5.firebaseapp.com",
    projectId: "authentication-app-6a1e5",
    storageBucket: "authentication-app-6a1e5.appspot.com",
    messagingSenderId: "220839289441",
    appId: "1:220839289441:web:1bc2d8bef018864e344020"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}