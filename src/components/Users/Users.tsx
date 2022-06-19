import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    setFollowingInProgress: (id: number, following: boolean) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let allPages = []
    for (let i = 1; i <= pagesCount; i++) {
        allPages.push(i)
    }
    return (
        <div>
            <div>
                {allPages.map(p => {
                    return <span className={(p === props.currentPage) ? s.currentPade : ""}
                                 onClick={(e) => props.changePage(p)}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}><img
                            src={u.photos.small ? u.photos.small : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
                            className={s.avatar}/></NavLink>
                    </div>
                    <div> {u.followed ? <button disabled={u.followingInProgress} onClick={() => {
                            props.setFollowingInProgress(u.id, true)
                            usersAPI.unfollowUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                    props.setFollowingInProgress(u.id, false)
                                }
                            })
                        }}>Unfollowed</button> :
                        <button disabled={u.followingInProgress} onClick={() => {
                            props.setFollowingInProgress(u.id, true)
                            usersAPI.followUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                    props.setFollowingInProgress(u.id, false)
                                }
                            })
                        }}>Followed</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
