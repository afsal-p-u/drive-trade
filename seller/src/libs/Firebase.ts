// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAJlRD8H4stcsM-TfH-YriJuJw8TzTaO24",
  authDomain: "drive-trade.firebaseapp.com",
  projectId: "drive-trade",
  storageBucket: "drive-trade.appspot.com",
  messagingSenderId: "926077937169",
  appId: "1:926077937169:web:6b12a336d1a39ffb15b3b0",
  measurementId: "G-2X45Q8MVH4"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)