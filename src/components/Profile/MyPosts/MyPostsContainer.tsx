import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
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