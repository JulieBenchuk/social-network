import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id: id, email: email,  login: login, isAuth: isAuth}
})
export const setLoading = (isLoading: boolean) => ({type: SET_IS_LOADING, isLoading: isLoading})
export const getUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let data = response.data
                dispatch(setUserData(data.id, data.email, data.login, true))
            }
        })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
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
export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}


