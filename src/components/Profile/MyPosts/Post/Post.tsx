import React from "react";
import classes from "./Post.module.css";


export type PostPropsType = {
    id: number
    post: string
    likeCount: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatarOfPost}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/004/899/833/large_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"/>
                <div className={classes.postStyle}>
                    {props.post}
                </div>
                <div className={classes.likeCount}>
                    <span>Like</span> {props.likeCount}
                </div>
            </div>
        </div>
    )
}

export default Post;