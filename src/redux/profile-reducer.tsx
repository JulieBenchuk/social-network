
export type addPostType = {
    type: "ADD-POST"
}
export type updateTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type ActionsType = updateTextType | addPostType
type PostType = {
    id: number
    post: string
    likeCount: number
}

type InitialStateType = {
    posts: PostType []
    newPostText: string
}
let initialState =  {
    posts: [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200}
    ],
        newPostText: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
