// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyD0W2E2lihwEvI6-4utdbCvVrflmQJC6-E",
//   authDomain: "test001-a3974.firebaseapp.com",
//   projectId: "test001-a3974",
//   storageBucket: "test001-a3974.appspot.com",
//   messagingSenderId: "795659655623",
//   appId: "1:795659655623:web:d4d0358aca3998da8521e2",
//   measurementId: "G-MMSS39XDVS",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(firebaseConfig);

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("logged in!");
//   } else {
//     console.log("No user");
//   }
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0W2E2lihwEvI6-4utdbCvVrflmQJC6-E",
  authDomain: "test001-a3974.firebaseapp.com",
  projectId: "test001-a3974",
  storageBucket: "test001-a3974.appspot.com",
  messagingSenderId: "795659655623",
  appId: "1:795659655623:web:d4d0358aca3998da8521e2",
  measurementId: "G-MMSS39XDVS",
};

const app = initializeApp(firebaseConfig);
const db = (app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
