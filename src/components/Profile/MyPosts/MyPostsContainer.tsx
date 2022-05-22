import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type PostType = {
    id: number
    post: string
    likeCount: number
}
type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchToProps = {
    updateNewPostText: (textOfNewPost: string)=>void
    addPost: ()=>void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps
let mapStateToProps = (state: AppStateType): MapStateToPropsType=> {
    return {
        //RETURN OBJECT !!!!!!
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
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

