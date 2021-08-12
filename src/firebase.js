import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBuR6abxYGSx1hQLtxB44RTgGMZeBFIj9o",
    authDomain: "disney-clone-e4855.firebaseapp.com",
    projectId: "disney-clone-e4855",
    storageBucket: "disney-clone-e4855.appspot.com",
    messagingSenderId: "800994716895",
    appId: "1:800994716895:web:bbb3c7853a6423abf34d6a",
    measurementId: "G-KQRF6VC7BT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
