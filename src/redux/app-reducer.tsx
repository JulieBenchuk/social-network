import {ActionsType, AppThunk} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";
import {serverErrorHandler} from "../utils/serverErrorHandler";
import {AxiosError} from "axios";

const SET_INITIALIZED_SUCCESS = "app/SET_INITIALIZED_SUCCESS"
const SET_IS_LOADING = "app/SET_IS_LOADING"
const SET_APP_ERROR = "app/SET_APP_ERROR"

let initialState = {
    isInitializedSuccess: false,
    isLoading: false,
    error: ""
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitializedSuccess: true
            };
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            };
        case SET_APP_ERROR:
            return {...state, error: action.error}
        default:
            return state;
    }
}

//action creators
export const setInitializedSuccessAC = () => ({
    type: SET_INITIALIZED_SUCCESS,
    isInitializedSuccess: true
} as const)

export const setLoadingAC = (isLoading: boolean) => ({type: SET_IS_LOADING, isLoading} as const)
export const setAppErrorAC = (error: string) => ({type: SET_APP_ERROR, error} as const)


//thunk creators
export const initializeAppTC = (): AppThunk => (dispatch: any) => {
    dispatch(setLoadingAC(true))
    dispatch(getAuthUserDataTC())
        .then(() => {
            dispatch(setInitializedSuccessAC())
            dispatch(setLoadingAC(false))
        })
        .catch((e: AxiosError) => {
            serverErrorHandler(e as AxiosError | Error, dispatch)
        })
}

//types
type InitialStateType = typeof initialState

export type setLoadingACType = {
    type: "app/SET_IS_LOADING"
    isLoading: boolean
}
export type setAppErrorType = {
    type: "app/SET_APP_ERROR", error: string
}






