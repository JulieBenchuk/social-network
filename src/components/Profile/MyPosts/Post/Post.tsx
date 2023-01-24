import React from "react";
import classes from "./Post.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import defaultAvatar from "./../../../../assets/img/avatar_default.webp"

export type PostPropsType = {
    id: number
    post: string
    likeCount: number
    onLikePost: (id: number, likeCount: number)=>void
    avatar: any
}

const Post: React.FC<PostPropsType> = ({id, post, likeCount, onLikePost, avatar}) => {
    const onLikeClickHandler = ()=>{
        onLikePost(id, likeCount)
    }
    return (
        <div className={classes.post}>
            <div className={classes.avatarOfPost}>
                <img src={avatar ? avatar : defaultAvatar}/>
                <div className={classes.postStyle}>
                    {post}
                </div>
                <div className={classes.likeCount} onClick={onLikeClickHandler}>
                    <FontAwesomeIcon icon={faHeart}/> {likeCount}
                </div>
            </div>
        </div>
    )
}

export default Post;