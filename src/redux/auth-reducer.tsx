import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction} from "redux-form/lib/actions";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET_USER_DATA"
const SET_IS_LOADING = "SET_IS_LOADING"


type InitialStateType = {
    email: string | null
    id: number | null
    login: string | null
    isLoading: boolean
    isAuth: boolean
}
let initialState = {
    email: null,
    id: null,
    login: null,
    isLoading: false,
    isAuth: false
}
type dataType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

type setUserDataACType = {
    type: "SET_USER_DATA"
    data: dataType
}

type setLoadingACType = {
    type: "SET_IS_LOADING"
    isLoading: boolean
}

type ActionsType = setLoadingACType | setUserDataACType
type AuthThunk = ThunkAction<void, AppStateType, unknown, ActionsType>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => ({
    type: SET_USER_DATA,
    data: {id: id, email: email,  login: login, isAuth: isAuth}
})

/*export const setLoading = (isLoading: boolean) => ({type: SET_IS_LOADING, isLoading: isLoading})*/

export const getUserDataThunkCreator = ():AuthThunk => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let data = response.data
                dispatch(setUserData(data.id, data.email, data.login, true))
            }
        })
    }
}
export const login = (email: string, password: string, rememberMe: boolean):AuthThunk => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getUserDataThunkCreator())
                } else {
                   const errorMessage = response.data.messages.length>0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: errorMessage}))
                }
            })
    }
}
export const logout = ():AuthThunk => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}


