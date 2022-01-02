// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcr53z-TVPonwK9VLzsuMt4PaxOOnJc3o",
  authDomain: "shop-a7c04.firebaseapp.com",
  projectId: "shop-a7c04",
  storageBucket: "shop-a7c04.appspot.com",
  messagingSenderId: "653946616321",
  appId: "1:653946616321:web:abfec86f9cf5c9927dde00",
  measurementId: "G-CT6Q8G6QH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app