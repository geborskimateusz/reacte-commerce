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

export const fetchCartDoc = async (cartId) => {
    const cartsRef = firestore.doc(`carts/${cartId}`)

    return await cartsRef.get()
        .then(cartDoc => {
            const cartData = cartDoc.data()

            return Object.entries(cartData.collections);
        })
        .then(collectionEntries => Promise.all(
            collectionEntries.map(async ([collectionId, items]) => {
                console.log('iterating over ' + collectionId + 'items ')
                console.log(items)

                const collectionRef = firestore.doc(`collections/${collectionId}`)

                const collectionDoc = await collectionRef.get();
               
                return items.map(item => 
                    collectionDoc.data().items.filter(fetchedItem => {
                        console.log(fetchedItem.id,item.itemId)
                        return fetchedItem.id == item.itemId;
                    }))
            })
        ))






    // cartsRef.get().then(cartDoc => {
    //     const cartData = cartDoc.data()

    //     return Object.entries(cartData.collections);
    // })
    //     .then(collectionEntries => {
    //         collectionEntries.map(([collectionId, items]) => {

    //             const collectionRef = firestore.doc(`collections/${collectionId}`)

    //             collectionRef.get().then(collectionDoc => {
    //                 return items.map(item => {
    //                     return collectionDoc.data().items[item.itemId];
    //                 })
    //             }).then(items => {

    //                 console.log(3, items)
    //                 return items
    //             })
    //         })
    //     })
    //     .then(data => {
    //         console.log(2, data)
    //         return data;
    //     })

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


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;