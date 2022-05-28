import React from 'react';
import {UserPropsType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";

export class Users extends React.Component<UserPropsType> {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }
    follow = (id: number) => {
        this.props.follow(id)
        console.log(`${id} will be followed`)
    }
    unfollow = (id: number) => {
        this.props.unfollow(id)
        console.log(`${id} will be unfollowed`)
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>get users</button>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img
                        src={u.photos.small ? u.photos.small : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
                        className={s.avatar}/></div>
                    <div> {u.followed ? <button onClick={() => this.unfollow(u.id)}>Unfollowed</button> :
                        <button onClick={() => this.follow(u.id)}>Followed</button>}</div>
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
        </div>;
    }
}
