import React from "react";
import classes from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    store: StoreType
}
const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState()
    let onAddPostClickHandler = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onChangeText = (textOfNewPost: string)=> {
        textOfNewPost && props.store.dispatch(updateNewPostTextActionCreator(textOfNewPost))
    }

    return <MyPosts updateNewPostText={onChangeText} addPost={onAddPostClickHandler} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer;