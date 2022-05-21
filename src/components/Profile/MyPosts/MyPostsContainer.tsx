import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState()
            let onAddPostClickHandler = () => {
                store.dispatch(addPostActionCreator());
            }
            let onChangeText = (textOfNewPost: string) => {
                textOfNewPost && store.dispatch(updateNewPostTextActionCreator(textOfNewPost))
            }
            return <MyPosts updateNewPostText={onChangeText} addPost={onAddPostClickHandler}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}/>
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;