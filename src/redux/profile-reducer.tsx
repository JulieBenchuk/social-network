import {Dispatch} from "redux";
import axios from "axios";
import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

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

export type ActionsType = updateTextType | addPostType | setUserProfileType
type PostType = {
    id: number
    post: string
    likeCount: number
}

type InitialStateType = {
    posts: PostType []
    newPostText: string
    profile: any
}
let initialState = {
    posts: [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this  network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200}
    ],
    newPostText: "",
    profile: null
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
export const getUserProfileThunkCreator = (userID: number = 24112) => {
    return (dispatch: Dispatch)=> {
        usersAPI.setUserProfile(userID).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
