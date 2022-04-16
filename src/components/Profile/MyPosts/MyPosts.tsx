import React from "react";
import classes from "./MyPosts.module.css";
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    post: Array<PostPropsType>
}
const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div>
            <div className={classes.myPostsHeader}>
                My posts
            </div>
            <div className={classes.textArea_Button}>
                <div>
                    <textarea placeholder={"What's new?"}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {props.post.map(p => (<Post id={p.id} post={p.post} likeCount={p.likeCount}/>))}
        </div>
    )
}

export default MyPosts;