import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"



export type addPostType = {
    type: "ADD-POST",
    newPostText: string
}
export type setUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: any
}
export type setProfileStatus = {
    type: "SET_PROFILE_STATUS"
    status: string
}
export type updateProfileStatus = {
    type: "UPDATE_PROFILE_STATUS"
    status: string
}

export type ActionsType =  addPostType | setUserProfileType | setProfileStatus | updateProfileStatus
type AuthThunk = ThunkAction<void, AppStateType, unknown, ActionsType>
type PostType = {
    id: number
    post: string
    likeCount: number
}

type InitialStateType = {
    posts: PostType []
    profile: any
    status: string
}
let initialState = {
    posts: [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this  network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200}
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: 5,
                post: action.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        }
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_PROFILE_STATUS":
            return {...state, status: action.status}
        case "UPDATE_PROFILE_STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
};
export const addPostAC = (newPostText: string): addPostType => ({type: ADD_POST, newPostText})
export const setUserProfileAC = (profile: any): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile: profile
})
export const setProfileStatusAC = (status: string): setProfileStatus => ({
    type : SET_PROFILE_STATUS,
    status:  status
})

export const getUserProfileThunkCreator = (userID: number): AuthThunk => {
    return (dispatch) => {
        profileAPI.getUserProfile(userID).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}
export const getStatusThunkCreator = (userID: number): AuthThunk => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setProfileStatusAC(response.data))
        })
    }
}
export const updateStatusThunkCreator = (status: string): AuthThunk => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatusAC(status))
            }
        })
    }
}
