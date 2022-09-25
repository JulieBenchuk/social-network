import {UserProfileType, profileAPI} from "../api/api";
import {ActionsType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS"
const DELETE_POST = "profile/DELETE_POST"
const SAVE_PHOTO = "profile/SAVE_PHOTO"

let initialState = {
    posts: [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this  network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200}
    ],
    profile:  {} as UserProfileType,
    status: "",
} as InitialStateType

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
            return {...state, profile: action.profile};
        case SET_PROFILE_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p=>p.id!==action.postID)};
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: {...state.profile.photos, large: action.photo, small: action.photo}}};
        default:
            return state;
    }
};


//action creators
export const addPostAC = (newPostText: string): addPostType => ({type: ADD_POST, newPostText} as const)
export const setUserProfileAC = (profile: UserProfileType): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile: profile
} as const)
export const setProfileStatusAC = (status: string): setProfileStatus => ({
    type: SET_PROFILE_STATUS,
    status: status
} as const)
export const deletePostAC = (postID: number): deletePost => ({type: DELETE_POST, postID} as const)
export const savePhotoAC = (photo: File): savePhoto => ({type: SAVE_PHOTO, photo} as const)



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

export const saveSelectedPhotoTC = (photo: File): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        profileAPI.savePhoto(photo)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(savePhotoAC(response.data.data.large))
                    dispatch(setLoadingAC(false))
                }
            })
    }
}


//types
type InitialStateType = {
    posts: PostType[]
    profile: UserProfileType
    status: string
}
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
    profile: UserProfileType
}
export type setProfileStatus = {
    type: "profile/SET_PROFILE_STATUS"
    status: string
}
export type deletePost = {
    type: "profile/DELETE_POST"
    postID: number
}
export type savePhoto ={
    type: "profile/SAVE_PHOTO"
    photo: File
}
