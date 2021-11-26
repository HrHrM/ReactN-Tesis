// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app'
import { getAuth }       from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlpSNxzBizyRQ4MhgES3aoVfkvJ3Z9riI",
  authDomain: "fir-tesis-auth.firebaseapp.com",
  projectId: "fir-tesis-auth",
  storageBucket: "fir-tesis-auth.appspot.com",
  messagingSenderId: "850502729787",
  appId: "1:850502729787:web:b4ace1876b8fc2e0651c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// let app 
//   if (app.lenght === 0) {
//     app = initializeApp(firebaseConfig)
//   } else {
//     app = app()
//   }

// const auth = firebase.auth()

// export { auth }

