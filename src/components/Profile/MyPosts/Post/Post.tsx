import React from "react";
import style from "./Post.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import defaultAvatar from "./../../../../assets/img/avatar_default.webp"

export type PostPropsType = {
    id: number
    post: string
    likeCount: number
    onLikePost: (id: number, likeCount: number) => void
    avatar: any
    img?: string
}

const Post: React.FC<PostPropsType> = ({id, post, likeCount, onLikePost, avatar, img}) => {
    const onLikeClickHandler = () => {
        onLikePost(id, likeCount)
    }
    return (
        <div className={style.post}>
            <div className={style.avatarOfPost}>
                <img src={avatar ? avatar : defaultAvatar}/>
            </div>
            <div className={style.postContentBlock}>
                <div className={style.postText}>{post}</div>
                <div className={style.likeCount} onClick={onLikeClickHandler}>
                    <FontAwesomeIcon icon={faHeart} className={style.heart}/>
                    <span>{likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Post);