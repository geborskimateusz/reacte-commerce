import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSucces, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {

    try {
        const collectionsRef = firestore.collection("collections");
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCollectionsSucces(collectionsMap));

    } catch (err) {
        yield put(fetchCollectionsFailure(err.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}