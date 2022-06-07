import React from 'react';
import {UserPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import {setTotalUsersCountAC} from "../../redux/users-reducer";

export class Users extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    follow = (id: number) => {
        this.props.follow(id)
        console.log(`${id} will be followed`)
    }
    unfollow = (id: number) => {
        this.props.unfollow(id)
        console.log(`${id} will be unfollowed`)
    }
    changePage = (page: number)=> {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let allPages = []
        for (let i = 1; i <= pagesCount; i++) {
            allPages.push(i)
        }
        return <div>
            <div>
                {allPages.map(p => {
                    return <span className={(p === this.props.currentPage) ? s.currentPade : ""} onClick={(e)=>this.changePage(p)}>{p}</span>
                })}
            </div>
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
