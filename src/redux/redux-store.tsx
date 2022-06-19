import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
