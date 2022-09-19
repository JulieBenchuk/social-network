import React from 'react';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";
import s from "./User.module.css"

type UserPropsType = {
    user: UserType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: boolean
}
export const User: React.FC<UserPropsType> = ({user, unfollow, follow, ...restProps}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}><img
                            src={user.photos.small ? user.photos.small : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
                            className={s.avatar}/></NavLink>
                    </div>
                    <div> {user.followed ? <button disabled={user.followingInProgress} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollowed</button> :
                        <button disabled={user.followingInProgress} onClick={() => {
                            follow(user.id)
                        }}>Followed</button>}</div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            )
        </div>
    );
};
