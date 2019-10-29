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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit();
}

export const createUserProfileDoc = async (user, data) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get();

    if (!snapshot.exist) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...data })
        } catch (err) {
            console.error('Error creating user.', err);
        }
    }

    return userRef;
}


export const convertCollectionsSnapshotToMap = collections => {
    const collection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return collection.reduce((acc, collection) => {
         acc[collection.title.toLowerCase()] = collection;
         return acc;
    }, {})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;