import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuzjfFGIkF2lrUU6ZJtrd-zBy0ayiNRIc",
    authDomain: "linkedin-clone-b2239.firebaseapp.com",
    projectId: "linkedin-clone-b2239",
    storageBucket: "linkedin-clone-b2239.appspot.com",
    messagingSenderId: "418322593823",
    appId: "1:418322593823:web:87d94f6e487aa75c117d2a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }