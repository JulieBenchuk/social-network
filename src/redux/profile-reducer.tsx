import {UserProfileType, profileAPI} from "../api/api";
import {ActionsType, AppStateType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";
import {stopSubmit} from "redux-form";
import {serverErrorHandler} from "../utils/serverErrorHandler";
import {AxiosError} from "axios";

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
    profile: {} as UserProfileType,
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
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)};
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: {...state.profile.photos, large: action.photo, small: action.photo}}
            };
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
export const setProfileStatusAC = (status: string): setProfileStatusType => ({
    type: SET_PROFILE_STATUS,
    status: status
} as const)
export const deletePostAC = (postID: number): deletePostType => ({type: DELETE_POST, postID} as const)
export const savePhotoAC = (photo: File): savePhotoType => ({type: SAVE_PHOTO, photo} as const)


//thunk creators
export const getUserProfileTC = (userID: number): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        profileAPI.getUserProfile(userID)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
                dispatch(setLoadingAC(false))
            })
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
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
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
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
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
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
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
            })
    }
}

export const saveProfileTC = (profile: UserProfileType): AppThunk => {
    return (dispatch: any, getState: () => AppStateType) => {
        const userID = getState().auth.id
        dispatch(setLoadingAC(true))
        profileAPI.saveProfile(profile)
            .then(response => {
                if (response.data.resultCode === 0 && userID) {
                    dispatch(getUserProfileTC(userID))
                    dispatch(setLoadingAC(false))
                } else {
                    const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"

                    //find contact with error
                    const errorArray = response.data.messages[0].toLowerCase().split("->")
                    let contactWithError = errorArray[1].slice(0, -1)
                    if (contactWithError === "mainlink") {
                        contactWithError = "mainLink"
                    }
                    const obj: any = {}
                    obj[contactWithError] = errorMessage

                    dispatch(stopSubmit("edit_profile", {"contacts": obj}))
                }
            })
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
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
export type setProfileStatusType = {
    type: "profile/SET_PROFILE_STATUS"
    status: string
}
export type deletePostType = {
    type: "profile/DELETE_POST"
    postID: number
}
export type savePhotoType = {
    type: "profile/SAVE_PHOTO"
    photo: File
}
