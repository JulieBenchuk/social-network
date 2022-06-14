import React from 'react';
import axios from "axios";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFollowingInProgress, setLoading,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../../common/Preloader";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
type MapDispatchToPropsType = {
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
    setUsers: (users: Array<UserType>) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    setIsLoading: (isLoading: boolean) => void
    setFollowingInProgress: (id: number, followingInProgress: boolean)=> void

}
export type UserPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    }
}

class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.setIsLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsLoading(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
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
    changePage = (page: number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setIsLoading(false)
        })
    }


    render() {
        return <div>
            {this.props.isLoading && <Preloader/>}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   changePage={this.changePage}
                   unfollow={this.unfollow} follow={this.follow}  setFollowingInProgress={this.props.setFollowingInProgress}/>
        </div>
    }
}

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    setIsLoading: setLoading,
    setFollowingInProgress: setFollowingInProgress
})(UsersContainer)
