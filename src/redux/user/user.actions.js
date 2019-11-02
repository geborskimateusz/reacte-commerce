import UserActionTypes from "./user.types";
import { actionChannel } from "redux-saga/effects";

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})


export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})


export const signInSucces = user => ({
    type: UserActionTypes.SIGN_IN_SUCCES,
    payload: user
})

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSucces = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCES
})

export const signOutFailure = err => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: err
})

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSucces = (user, additionalData) => ({
    type: UserActionTypes.SIGN_UP_SUCCES,
    payload: {user, additionalData}
})

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})