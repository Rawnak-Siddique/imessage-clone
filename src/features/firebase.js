import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6q10dUEcNHszOYvguvGXexto99F4czJM",
    authDomain: "imessage-clone-f9c76.firebaseapp.com",
    databaseURL: "https://imessage-clone-f9c76.firebaseio.com",
    projectId: "imessage-clone-f9c76",
    storageBucket: "imessage-clone-f9c76.appspot.com",
    messagingSenderId: "91080886918",
    appId: "1:91080886918:web:580c8697444b8de4f1df07",
    measurementId: "G-K6HS9VZV80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;