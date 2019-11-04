import { takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { googleProvider, auth, createUserProfileDoc, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSucces, signInFailure, signUpSucces, signOutSucces, signOutFailure, signUpFailure } from './user.actions';
import { all, call } from 'redux-saga/effects';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDoc,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSucces({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {

    try {

        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (err) {
        put(signInFailure(err))
    }

}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {

    try {

        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (err) {
        put(signInFailure(err))
    }
}

export function* onEmailAndPasswordSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* isUserAuthenticated() {
    try {

        const userAuth = yield getCurrentUser();

        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);


    } catch (err) {
        put(signInFailure(err))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSucces());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );

        yield put(signUpSucces(user, displayName))

    }
    catch (err) {
        yield put(signUpFailure(err))
    }

}

export function* signUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSingUpSucces() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCES, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailAndPasswordSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(signUpStart),
        call(onSingUpSucces)
    ])
}