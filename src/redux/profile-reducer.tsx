import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"



export type addPostType = {
    type: "ADD-POST"
}
export type updateTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
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

export type ActionsType = updateTextType | addPostType | setUserProfileType | setProfileStatus | updateProfileStatus
type PostType = {
    id: number
    post: string
    likeCount: number
}

type InitialStateType = {
    posts: PostType []
    newPostText: string
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
    newPostText: "",
    profile: null,
    status: "bla bla"
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: 5,
                post: state.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.text};
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
export const addPostActionCreator = (): addPostType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (textOfNewPost: string): updateTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    text: textOfNewPost
})
export const setUserProfile = (profile: any): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile: profile
})
export const setProfileStatus = (status: string): setProfileStatus => ({
    type : SET_PROFILE_STATUS,
    status:  status
})

export const getUserProfileThunkCreator = (userID: number = 24112) => {
    return (dispatch: Dispatch) => {
        profileAPI.setUserProfile(userID).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getProfileStatusThunkCreator = (userID: number = 24112) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateProfileStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(response.data))
            }
        })
    }
}
