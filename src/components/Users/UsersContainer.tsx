import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

import {Users} from "./Users";

type MapStatePopsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    setUsers: (users: Array<UserType>)=>void
}
export type UserPropsType = MapStatePopsType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType): MapStatePopsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
