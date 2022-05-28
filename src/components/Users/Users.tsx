import React from 'react';
import {UserPropsType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";

export const Users = (props: UserPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
    const follow = (id: number) => {
        props.follow(id)
        console.log(`${id} will be followed`)
    }
    const unfollow = (id: number) => {
        props.unfollow(id)
        console.log(`${id} will be unfollowed`)
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photos.small ? u.photos.small : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} className={s.avatar}/></div>
                    <div> {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollowed</button> :
                        <button onClick={() => follow(u.id)}>Followed</button>}</div>
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
