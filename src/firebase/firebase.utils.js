import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCtGYvUiaCsU6esoHUBIfu6pSBAjrAor_g",
    authDomain: "crwn-db-c8097.firebaseapp.com",
    projectId: "crwn-db-c8097",
    storageBucket: "crwn-db-c8097.appspot.com",
    messagingSenderId: "284639656883",
    appId: "1:284639656883:web:8d1ffb5bc94a7ce1fe29c6",
    measurementId: "G-94E28R6WYH"
};

firebase.initializeApp(config);

export const auth = firebase .auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;