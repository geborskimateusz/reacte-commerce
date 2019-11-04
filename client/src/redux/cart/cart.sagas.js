import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions.js';

export function* clearCartItems() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCES, clearCartItems);
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
} 