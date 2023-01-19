import React from 'react';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";
import s from "./User.module.css"
import avatar_default from "./../../../assets/img/avatar_default.webp"

type UserPropsType = {
    user: UserType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: boolean
}
export const User: React.FC<UserPropsType> = ({user, unfollow, follow}) => {
    return (
        <div className={s.userBlock}>
                <span className={s.avatarBlock}>
                    <div>
                        <NavLink to={"/profile/" + user.id}><img
                            src={user.photos.small ? user.photos.small : avatar_default}
                            className={s.avatar} alt={"avatar"}/></NavLink>
                    </div>
                    <div> {user.followed ? <button disabled={user.followingInProgress} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollowed</button> :
                        <button disabled={user.followingInProgress} onClick={() => {
                            follow(user.id)
                        }}>Followed</button>}</div>
                </span>
            <span className={s.userInfo}>
                        <div> <span>name: </span>{user.name.toUpperCase()}</div>
                        <div><span>status: </span>{user.status ? user.status : "no status"}</div>
                </span>
        </div>
    );
};
