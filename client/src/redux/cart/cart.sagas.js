import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart, setCartItems } from './cart.actions.js';
import { fetchCartDoc, saveOrUpdateCartDoc } from '../../firebase/firebase.utils';
import { select } from 'redux-saga/effects';
import { selectCartItems } from './cart.selector';

export function* clearCartItems() {

    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCES, clearCartItems);
}

export function* fetchCartItems() {
    const cartItems = yield call(fetchCartDoc);
    if (cartItems) {
        yield put(setCartItems(cartItems));
    }
}

export function* onSingUpSucces() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCES, fetchCartItems)
}

export function* updateCartItems() {
    const cartItems = yield select(selectCartItems);
    yield call(saveOrUpdateCartDoc, cartItems);
}


export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, updateCartItems);
}
export function* cartSagas() {
    yield all([
        call(onSingUpSucces),
        call(onSignOutSuccess),
        call(onSignOutStart)
    ])
} 