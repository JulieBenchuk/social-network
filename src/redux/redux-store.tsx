import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = legacy_createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>