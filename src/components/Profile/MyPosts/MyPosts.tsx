import React from "react";
import classes from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<PostPropsType>
    newPostText: string
    /*    dispatch: (action: ActionsType ) => void*/
}
const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.posts.map((p, index) => (<Post key={index} id={p.id} post={p.post} likeCount={p.likeCount}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPostClickHandler = () => {
        props.addPost();
    }
    let onChangeText = () => {
        let textOfNewPost = newPostElement.current?.value;
        textOfNewPost && props.updateNewPostText(textOfNewPost)
    }

    return (
        <div>
            <h3 className={classes.myPostsHeader}>My posts</h3>
            <div className={classes.textArea_Button}>
                <div>
                    <textarea ref={newPostElement} onChange={onChangeText} value={props.newPostText}
                              placeholder={"What's new?"}/>
                </div>
                <div>
                    <button onClick={onAddPostClickHandler}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;