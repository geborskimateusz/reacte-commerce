import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { reject, async } from 'q';

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

export const fetchCartDoc = async () => {

    const id = auth.currentUser.uid;

    const cartsRef = firestore.doc(`carts/${id}`)
    const snapshot = await cartsRef.get();

    if (snapshot.exists) {
        const cartData = snapshot.data();
        return cartData.cartItems;
    }
}

export const saveOrUpdateCartDoc = async (cartItems) => {
    console.log('in save or update')
    const id = auth.currentUser.uid;

    const cartsRef = firestore.doc(`carts/${id}`)

    try {
        console.log(cartItems)
        await cartsRef.set({ cartItems })
    } catch (err) {
        console.error('Error when saving cartItems.', err);
    }

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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

function itemWithQuantity(fetchedItem, item) {
    fetchedItem.quantity = parseInt(item.quantity, 10);
    return fetchedItem;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

