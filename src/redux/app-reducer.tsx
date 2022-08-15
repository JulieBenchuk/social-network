import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

type InitialStateType = {
    isInitializedSuccess: boolean
}
let initialState = {
    isInitializedSuccess: false
}
type setInitializedSuccessACType = {
    type: "SET_INITIALIZED_SUCCESS"
    isInitializedSuccess: boolean
}
const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"

type ActionsType = setInitializedSuccessACType
type AuthThunk = ThunkAction<void, AppStateType, unknown, ActionsType>

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitializedSuccess: true
            };
        default:
            return state;
    }
}

export const setInitializedSuccessAC = (): setInitializedSuccessACType => ({
    type: SET_INITIALIZED_SUCCESS,
    isInitializedSuccess: true
})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        debugger
        dispatch(setInitializedSuccessAC())
    })
}



