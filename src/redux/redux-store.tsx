import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {
    addPostType,
    profileReducer,
    setProfileStatus,
    setUserProfileType,
    updateProfileStatus
} from "./profile-reducer";
import {dialogsReducer, sendMessageType} from "./dialogs-reducer";
import {
    followACType, setFollowingInProgressACType,
    setPageACType,
    setTotalUsersCountACType,
    setUsersACType,
    unfollowACType,
    usersReducer
} from "./users-reducer";
import {authReducer, setUserDataACType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, setInitializedSuccessAC, setLoadingACType} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, AppStateType, unknown, ActionsType>
export type ActionsType =
    addPostType
    | setUserProfileType
    | setProfileStatus
    | updateProfileStatus
    | setLoadingACType
    | setUserDataACType
    | sendMessageType
    | followACType
    | unfollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType
    | setFollowingInProgressACType
    | ReturnType<typeof setInitializedSuccessAC>


// @ts-ignore
window.store = store
