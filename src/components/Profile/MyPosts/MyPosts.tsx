import React from "react";
import classes from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.posts.map(p => (<Post id={p.id} post={p.post} likeCount={p.likeCount}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPostClickHandler = () => {
        debugger
        let textOfNewPost = newPostElement.current?.value;
        textOfNewPost && props.addPost(textOfNewPost);
        if (newPostElement.current?.value) {
            newPostElement.current.value = "";
        }
    }

    return (
        <div>
            <h3 className={classes.myPostsHeader}>My posts</h3>
            <div className={classes.textArea_Button}>
                <div>
                    <textarea ref={newPostElement} placeholder={"What's new?"}/>
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