import React from 'react';
import {UserPropsType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"

export const Users = (props: UserPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            fullName: "Julie B.",
            status: "I'm kroshka ben",
            followed: true,
            location: {country: "Belarus", city: "Homiel"},
            avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        },
            {
                id: 2,
                fullName: "Nikita K.",
                status: "ololo)))",
                followed: false,
                location: {country: "Russia", city: "Moscow"},
                avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
            },
            {
                id: 3,
                fullName: "Marina V.",
                status: "I ike flowers",
                followed: true,
                location: {country: "Ukraine", city: "Chernigiv"},
                avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
            },
            {
                id: 4,
                fullName: "Denis K.",
                status: "Escaped from regime of Lukashenko",
                followed: true,
                location: {country: "Lithuania", city: "Vilnius"},
                avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
            },])
    }
    const follow = (id: number) => {
        props.follow(id)
        console.log(`${id} will be followed`)
    }
    const unfollow = (id: number) => {
        props.unfollow(id)
        console.log(`${id} will be unfollowed`)
    }
    const setUsers = (users: Array<UserType>) => {
        props.setUsers(users)
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.avatar} className={s.avatar}/></div>
                    <div> {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollowed</button> :
                        <button onClick={() => follow(u.id)}>Followed</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
