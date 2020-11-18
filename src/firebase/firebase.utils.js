import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0nLfg37YgybGb2o5p9X-v8MpGujR09zw",
    authDomain: "plant-db-b80ef.firebaseapp.com",
    databaseURL: "https://plant-db-b80ef.firebaseio.com",
    projectId: "plant-db-b80ef",
    storageBucket: "plant-db-b80ef.appspot.com",
    messagingSenderId: "458644915111",
    appId: "1:458644915111:web:8b609ba27a5b48fdf3ac82",
    measurementId: "G-LEL81M2L7K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;