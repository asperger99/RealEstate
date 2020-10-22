import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArtOCDoas0aKXLGJzig40yaAOxcHc_BIM",
  authDomain: "ashiyana-fe39b.firebaseapp.com",
  databaseURL: "https://ashiyana-fe39b.firebaseio.com",
  projectId: "ashiyana-fe39b",
  storageBucket: "ashiyana-fe39b.appspot.com",
  messagingSenderId: "920912678941",
  appId: "1:920912678941:web:e625209000333a8afeb6f4",
  measurementId: "G-Q3DVWMVQBL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
