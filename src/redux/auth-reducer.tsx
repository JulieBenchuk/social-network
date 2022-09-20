import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ActionsType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

//action creators
export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => ({
    type: SET_USER_DATA,
    data: {id: id, email: email, login: login, isAuth: isAuth}
} as const)


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

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch: any) => {
        dispatch(setLoadingAC(true))
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
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

//types
type InitialStateType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

type dataType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

export type setUserDataACType = {
    type: "SET_USER_DATA"
    data: dataType
}



