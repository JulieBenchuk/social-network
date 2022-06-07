import React from 'react';
import axios from "axios";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setLoadingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Preloader} from "../../common/Preloader";

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
    setIsLoading: (isLoading: boolean)=> void
}
export type UserPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setIsLoading: (isLoading: boolean) => {
            dispatch(setLoadingAC(isLoading))
        }
    }
}

class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsLoading(false)
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
    changePage = (page: number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsLoading(false)
        })
    }


    render() {
        return <div>
            {this.props.isLoading && <Preloader />}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   changePage={this.changePage}
                   unfollow={this.unfollow} follow={this.follow}/>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
