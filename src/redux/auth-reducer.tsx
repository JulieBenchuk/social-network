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
                ...action.data,
                isAuth: true
            };
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setUserData = (  id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {email: email, id: id,  login: login}})
export const setLoading = (isLoading: boolean) => ({type: SET_IS_LOADING, isLoading: isLoading})


