import React, {LegacyRef} from "react";
import classes from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    post: Array<PostPropsType>
}
const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.post.map(p => (<Post id={p.id} post={p.post} likeCount={p.likeCount}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let textOfNewPost = newPostElement.current?.value;
            alert(textOfNewPost)
    }

    return (
        <div>
            <h3 className={classes.myPostsHeader}>My posts</h3>
            <div className={classes.textArea_Button}>
                <div>
                    <textarea ref={newPostElement} placeholder={"What's new?"}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;