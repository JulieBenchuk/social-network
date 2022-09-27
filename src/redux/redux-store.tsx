import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {
    addPostType, deletePostType,
    profileReducer, savePhotoType,
    setProfileStatusType,
    setUserProfileType
} from "./profile-reducer";
import {deleteMessageType, dialogsReducer, sendMessageType} from "./dialogs-reducer";
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
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void | Promise<any>, AppStateType, unknown, ActionsType>
export type ActionsType =
    addPostType
    | setUserProfileType
    | setProfileStatusType
    | setLoadingACType
    | setUserDataACType
    | sendMessageType
    | followACType
    | unfollowACType
    | setUsersACType
    | setPageACType
    | setTotalUsersCountACType
    | setFollowingInProgressACType
    | deletePostType
    | deleteMessageType
    | savePhotoType
    | ReturnType<typeof setInitializedSuccessAC>

