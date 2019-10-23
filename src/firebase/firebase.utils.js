import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDC2pMoRcsGm5VAKwZEQq430WlJo4ufujw",
    authDomain: "kanban-fa15b.firebaseapp.com",
    databaseURL: "https://kanban-fa15b.firebaseio.com",
    projectId: "kanban-fa15b",
    storageBucket: "kanban-fa15b.appspot.com",
    messagingSenderId: "933576098",
    appId: "1:933576098:web:5156290aaee585dafd86fb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;