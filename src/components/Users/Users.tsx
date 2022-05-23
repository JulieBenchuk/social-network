import React from 'react';
import {UserPropsType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";

export const Users = (props: UserPropsType) => {
   /* const follow = (id: number)=> {
        props.users.map()
    }
    const unfollow = (id: number)=> {
        props.users.map()
    }
    const setUsers = (users: Array<UserType>)=>{
        props.setUsers(users)
    }*/

    return (
        <div>
            {props.users.map(u=><div key={u.id}>
                <span>
                    <div> <img src={u.avatar}/></div>
                    <div> <button> </button></div>
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
