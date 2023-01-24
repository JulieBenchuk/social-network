import React from "react";
import {addPostAC, likePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type PostType = {
    id: number
    post: string
    likeCount: number
}
type MapStateToPropsType = {
    posts: PostType[]
}
type MapDispatchToProps = {
    addPost: (newPostText: string)=>void
    likePost: (postID: number, likeCount: number)=>void
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
            dispatch(addPostAC(newPostText));
        },
        likePost: (postID: number, likeCount: number)=> {
            dispatch(likePostAC(postID, likeCount))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

