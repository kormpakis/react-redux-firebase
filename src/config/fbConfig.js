import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAZAhg1qsNehY59EgN5bfsYYsd_5DikzZM",
    authDomain: "marioplan-ee38b.firebaseapp.com",
    databaseURL: "https://marioplan-ee38b.firebaseio.com",
    projectId: "marioplan-ee38b",
    storageBucket: "marioplan-ee38b.appspot.com",
    messagingSenderId: "842751861857",
    appId: "1:842751861857:web:95c5ebabb1c9b8fff6b620",
    measurementId: "G-TG9Z4MECVK",
    userProfile: 'users',
    useFirestoreForProfile: true
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
