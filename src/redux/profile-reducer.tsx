import {UserProfileType, profileAPI} from "../api/api";
import {ActionsType, AppStateType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";
import {stopSubmit} from "redux-form";
import {serverErrorHandler} from "../utils/serverErrorHandler";
import {AxiosError} from "axios";

const ADD_POST = "profile/ADD-POST"
const LIKE_POST = "profile/LIKE-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS"
const DELETE_POST = "profile/DELETE_POST"
const SAVE_PHOTO = "profile/SAVE_PHOTO"

let initialState = {
    posts: [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this  network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200},
        {id: 5, post: "I'm upset", likeCount: 309},
        {id: 6, post: "Do you like my page?", likeCount: 10},
        {id: 7, post: "I wanna have a lot of followers)))", likeCount: 10},
        {id: 8, post: "Do you have somebody you can rely on in times of need?", likeCount: 10},
        {id: 9, post: "Follow me in LinkedIn!!!", likeCount: 20},
        {id: 10, post: "So, I'm looking for a new job. Maybe you can help me...", likeCount: 2},
        {id: 11, post: "I can't stop listening to Noize MC!!!!", likeCount: 20},
        {id: 12, post: "Do you like a new track of Noize MC", likeCount: 20},
        {id: 13, post: "I overcame my shyness by attending public speaking classes", likeCount: 55},
        {id: 14, post: "Do your best!", likeCount: 20},
        {id: 15, post: "How are you?", likeCount: 35},
        {id: 16, post: "Maybe someone wanna talk to me?", likeCount: 35},
        {id: 17, post: "Long time no see!", likeCount: 35},
        {id: 18, post: "How was your weekend?", likeCount: 35},
        {id: 19, post: "I have no idea. I haven’t got a clue.", likeCount: 35},
        {id: 20, post: "Something Rocks!", likeCount: 35},
        {id: 21, post: "Are you kidding?", likeCount: 27},
        {id: 22, post: "Awful", likeCount: 7},
        {id: 23, post: "What a pity! ", likeCount: 7},
        {id: 24, post: "What do you mean?", likeCount: 7},
        {id: 25, post: "How much are your boots, your clothes and your motorcycle?", likeCount: 7},
        {id: 26, post: "Can you ask your dog to bark, please? ", likeCount: 7},
        {id: 27, post: "I'm upset", likeCount: 2},
        {id: 28, post: "Where can I get such a nice prom dress?", likeCount: 45},
        {id: 29, post: "How do you like John’s new apartment?", likeCount: 45},
        {id: 30, post: "Where can I find investors? ", likeCount: 45},
        {id: 31, post: "So what are you doing next weekend?", likeCount: 45},
        {id: 32, post: "As for me, I prefer cheeseburgers. ", likeCount: 45},
        {id: 33, post: "The problem is that free college is not free.", likeCount: 45},
        {id: 34, post: "The point is that it is possible but very difficult.", likeCount: 45},
        {id: 35, post: "Unfortunately, we got lost in the forest.", likeCount: 45},
        {id: 36, post: "In my opinion, his previous play was much better.", likeCount: 15},
        {id: 37, post: "Moreover, they didn’t let me speak to a lawyer.", likeCount: 60},
        {id: 38, post: "What’s worse is that they really believed in what they were saying.", likeCount: 8},
        {id: 39, post: "Briefly speaking, the eagles took them back from Mordor.", likeCount: 0},
        {id: 40, post: "Fortunately, we are in the semifinals but we are not champions.", likeCount: 70},
    ],
    profile: {} as UserProfileType,
    status: "",
} as InitialStateType

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: Math.ceil(Math.random() * 100),
                post: action.newPostText,
                likeCount: 0
            };
            return {...state, posts: [newPost, ...state.posts]};
        }
            ;
        case LIKE_POST: {
            return {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.postID) {
                        return {...p, likeCount: action.likeCount}
                    } else return p
                })
            }
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
export const likePostAC = (postID: number, likeCount: number): likePostType => ({
    type: LIKE_POST,
    postID,
    likeCount
} as const)
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
    img?: string
}

export type addPostType = {
    type: "profile/ADD-POST",
    newPostText: string
}
export type likePostType = {
    type: "profile/LIKE-POST",
    postID: number
    likeCount: number
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
