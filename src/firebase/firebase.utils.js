import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXkbS0SfUgYaeiRPOhJBXaxhaIEpUfAzs",
    authDomain: "plantshop-cd481.firebaseapp.com",
    projectId: "plantshop-cd481",
    storageBucket: "plantshop-cd481.appspot.com",
    messagingSenderId: "902678650226",
    appId: "1:902678650226:web:6f782f673e14ce0700d1eb",
    measurementId: "G-7Z3445SV1D"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }

            )
        } catch (error) {
            console.log(error.message);
        }

    }


    return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;