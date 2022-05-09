import {ActionsType, addPostType, PostType, ProfilePageType, updateTextType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                post: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.text
            return state;
        default:
            return state;
    }
};
export const addPostActionCreator = (): addPostType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (textOfNewPost: string): updateTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    text: textOfNewPost
})
