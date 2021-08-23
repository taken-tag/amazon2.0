import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByEgKUgCye-vmQ59N3RewZ4nsMNjuscZM",
    authDomain: "fir-aac18.firebaseapp.com",
    projectId: "fir-aac18",
    storageBucket: "fir-aac18.appspot.com",
    messagingSenderId: "446647110131",
    appId: "1:446647110131:web:57620332576950caffea86",
    measurementId: "G-PSDXP3PGX0"
  };

  const app = !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) :
   firebase.app()

   const db = app.firestore()

   export default db;