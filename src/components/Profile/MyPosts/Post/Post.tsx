import React from "react";
import classes from "./Post.module.css";

export type PostPropsType = {
    id: number
    post: string
    likeCount: number
}

const Post: React.FC<PostPropsType> = ({post, likeCount}) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatarOfPost}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/004/899/833/large_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"/>
                <div className={classes.postStyle}>
                    {post}
                </div>
                <div className={classes.likeCount}>
                    <span> <img src="https://www.pinclipart.com/picdir/middle/59-595072_heart-instagram-like-icon-png-clipart.png" alt="likes"/></span> {likeCount}
                </div>
            </div>
        </div>
    )
}

export default Post;