import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator,
    setPage,
    unfollowThunkCreator,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../../common/Preloader";
import {compose} from "redux";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setCurrentPage: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type UserPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isAuth: state.auth.isAuth
    }
}

class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    follow = (id: number) => {
        this.props.follow(id) /////////
        console.log(`${id} will be followed`)
    }
    unfollow = (id: number) => {
        this.props.unfollow(id) //////////////
        console.log(`${id} will be unfollowed`)
    }
    changePage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }


    render() {
        return <div>
            {this.props.isLoading && <Preloader/>}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   changePage={this.changePage}
                   unfollow={this.unfollow} follow={this.follow} isAuth={this.props.isAuth}
                   followingInProgress={this.props.isLoading}
            />
        </div>
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage: setPage,
    getUsers: getUsersThunkCreator
}))(UsersContainer)

