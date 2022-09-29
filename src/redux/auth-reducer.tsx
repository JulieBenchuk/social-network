import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ActionsType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";

const SET_USER_DATA = "auth/SET_USER_DATA"
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL"

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captcha: ""
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_CAPTCHA_URL:
            return {...state, captcha: action.captcha}
        default:
            return state;
    }
}

//action creators
export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => ({
    type: SET_USER_DATA,
    data: {id: id, email: email, login: login, isAuth: isAuth}
} as const)

export const setCaptchaUrlAC = (captcha: string): setCaptchaUrlACType => ({type: SET_CAPTCHA_URL, captcha})


//thunk creators
export const getAuthUserDataTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    return authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                let data = response.data
                dispatch(setUserDataAC(data.id, data.email, data.login, true))
            }
            dispatch(setLoadingAC(false))
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => {
    return (dispatch: any) => {
        dispatch(setLoadingAC(true))
        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                    dispatch(setCaptchaUrlAC(""))
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrlTC())
                    }
                    const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: errorMessage}))
                }
                dispatch(setLoadingAC(false))
            })
    }
}

export const logoutTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
            dispatch(setLoadingAC(false))
        })
}

export const getCaptchaUrlTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    securityAPI.getCaptchaURL()
        .then(response => {
            dispatch(setCaptchaUrlAC(response.data.url))
            dispatch(setLoadingAC(false))
        })
}

//types
type InitialStateType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
    captcha: string
}

type dataType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

export type setUserDataACType = {
    type: "auth/SET_USER_DATA"
    data: dataType
}
export type setCaptchaUrlACType = {
    type: "auth/SET_CAPTCHA_URL"
    captcha: string
}



