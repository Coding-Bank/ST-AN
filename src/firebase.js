import firebase from 'firebase';


    const firebaseConfig = {
        apiKey: "AIzaSyBvimoRZdvh8-Jp_0Zqs1Cu_xTwUzgz2Wo",
        authDomain: "st-an-2d039.firebaseapp.com",
        projectId: "st-an-2d039",
        storageBucket: "st-an-2d039.appspot.com",
        messagingSenderId: "595856929672",
        appId: "1:595856929672:web:bcf8461f5b11db3e53803d",
        measurementId: "G-LYDYBZRLVT"
      };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;