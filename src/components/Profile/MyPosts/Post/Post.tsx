import React from "react";
import classes from "./Post.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export type PostPropsType = {
    id: number
    post: string
    likeCount: number
    onLikePost: (id: number, likeCount: number)=>void
}

const Post: React.FC<PostPropsType> = ({id, post, likeCount, onLikePost}) => {
    const onLikeClickHandler = ()=>{
        onLikePost(id, likeCount)
    }
    return (
        <div className={classes.post}>
            <div className={classes.avatarOfPost}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/004/899/833/large_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"/>
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