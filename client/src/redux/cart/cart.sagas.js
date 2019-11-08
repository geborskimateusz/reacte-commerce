import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart, setCartItems } from './cart.actions.js';
import { fetchCartDoc } from '../../firebase/firebase.utils';
export function* clearCartItems() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCES, clearCartItems);
}

export function* fetchCartItems({ payload: { id } }) {
    const cartItems = yield call(fetchCartDoc, id);
    if (cartItems) {
        yield put(setCartItems(cartItems));
    }
}

export function* onSingUpSucces() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCES, fetchCartItems)
}

export function* cartSagas() {
    yield all([
        call(onSingUpSucces),
        call(onSignOutSuccess)
    ])
} 