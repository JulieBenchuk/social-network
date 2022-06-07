import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

import {Users} from "./Users";

type MapStatePopsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    setTotalUsersCount: (count: number)=> void
    setCurrentPage: (page: number)=> void
    setUsers: (users: Array<UserType>)=>void
    follow: (id: number)=>void
    unfollow: (id: number)=>void
}
export type UserPropsType = MapStatePopsType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType): MapStatePopsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch)=> {
    return {
        follow: (id: number)=> {
            dispatch(followAC(id))
        },
        unfollow: (id: number)=> {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number)=> {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
