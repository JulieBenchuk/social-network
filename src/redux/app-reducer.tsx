import {ActionsType, AppThunk} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"
const SET_IS_LOADING = "SET_IS_LOADING"

let initialState = {
    isInitializedSuccess: false,
    isLoading: false
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
            }
        default:
            return state;
    }
}

//action creators
export const setInitializedSuccessAC = () => ({
    type: SET_INITIALIZED_SUCCESS,
    isInitializedSuccess: true
} as const)

export const setLoadingAC = (isLoading: boolean) => ({type: SET_IS_LOADING, isLoading: isLoading} as const)


//thunk creators
export const initializeAppTC = (): AppThunk => (dispatch: any) => {
    dispatch(setLoadingAC(true))
    dispatch(getAuthUserDataTC())
    .then(() => {
        dispatch(setInitializedSuccessAC())
        dispatch(setLoadingAC(false))
    })
}

//types
type InitialStateType = typeof initialState

export type setLoadingACType = {
    type: "SET_IS_LOADING"
    isLoading: boolean
}






