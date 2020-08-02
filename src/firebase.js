import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAP8FzAKn9gB8UZRtStl5CoAORq6Z1OCzg",
    authDomain: "tindev-4828f.firebaseapp.com",
    databaseURL: "https://tindev-4828f.firebaseio.com",
    projectId: "tindev-4828f",
    storageBucket: "tindev-4828f.appspot.com",
    messagingSenderId: "342493620718",
    appId: "1:342493620718:web:c74adb20b263f2727546ff",
    measurementId: "G-09EFGQ930H"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore()
  firebase.analytics();

  export default database