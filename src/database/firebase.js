import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATGPyt4nPpKE5HJGCGJJWfGdeODMFrufc",
    authDomain: "malabares-14a09.firebaseapp.com",
    projectId: "malabares-14a09",
    storageBucket: "malabares-14a09.appspot.com",
    messagingSenderId: "920918230936",
    appId: "1:920918230936:web:7e7d40cb3a993ca0534ded"
};

const app = firebase.initializeApp(firebaseConfig);
export const getFirestore = () => firebase.firestore(app);

export const getProducts = () => {
    return getFirestore().collection("products");
}
export const getProduct = (productId) => {
    return getProducts().doc(productId);
}