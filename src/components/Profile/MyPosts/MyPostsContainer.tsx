import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        //RETURN OBJECT !!!!!!
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return { //LIKE WERE EARLIER PROPS (state and callbacks)
        updateNewPostText: (textOfNewPost: string) => {
            textOfNewPost && dispatch(updateNewPostTextActionCreator(textOfNewPost))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

