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
import {authReducer, setCaptchaUrlACType, setUserDataACType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, setAppErrorType, setInitializedSuccessAC, setLoadingACType} from "./app-reducer";

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
export type AppThunk = ThunkAction<void, AppStateType, unknown, ActionsType>
export type ActionsType =
    addPostType
    | setUserProfileType
    | setProfileStatusType
    | setLoadingACType
    | setAppErrorType
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
    | setCaptchaUrlACType
    | ReturnType<typeof setInitializedSuccessAC>

