import {profileAPI} from "../api/api";
import {ActionsType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS"

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
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                post: action.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};


//action creators
export const addPostAC = (newPostText: string): addPostType => ({type: ADD_POST, newPostText} as const)
export const setUserProfileAC = (profile: any): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile: profile
} as const)
export const setProfileStatusAC = (status: string): setProfileStatus => ({
    type: SET_PROFILE_STATUS,
    status: status
} as const)


//thunk creators
export const getUserProfileTC = (userID: number): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        profileAPI.getUserProfile(userID)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
                dispatch(setLoadingAC(false))
            })
    }
}

export const getStatusTC = (userID: number): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        profileAPI.getStatus(userID)
            .then(response => {
                dispatch(setProfileStatusAC(response.data))
                dispatch(setLoadingAC(false))
            })
    }
}

export const updateStatusTC = (status: string): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatusAC(status))
                    dispatch(setLoadingAC(false))
                }
            })
    }
}


//types
type InitialStateType = typeof initialState

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type addPostType = {
    type: "profile/ADD-POST",
    newPostText: string
}

export type setUserProfileType = {
    type: "profile/SET_USER_PROFILE"
    profile: any
}

export type setProfileStatus = {
    type: "profile/SET_PROFILE_STATUS"
    status: string
}
