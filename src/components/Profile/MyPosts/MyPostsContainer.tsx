import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
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
}
type MapDispatchToProps = {
    addPost: (newPostText: string)=>void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps
let mapStateToProps = (state: AppStateType): MapStateToPropsType=> {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

