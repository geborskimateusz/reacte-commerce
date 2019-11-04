import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSucces = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCES,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMsg => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg
})

export const fetchCollectionsStartAsync = () => {

    return dispatch => {

        const collectionsRef = firestore.collection("collections");

        dispatch(fetchCollectionsStart());

        collectionsRef
            .get()
            .then(snapshot => {

                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

                dispatch(fetchCollectionsSucces(collectionsMap))

            }).catch(err => dispatch(fetchCollectionsFailure(err)));
    }
}