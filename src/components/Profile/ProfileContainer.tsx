import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getStatusTC,
    getUserProfileTC, saveProfileTC, saveSelectedPhotoTC,
    updateStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserProfileType} from "../../api/api";
import {followTC, unfollowTC, UserType} from "../../redux/users-reducer";


type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    isAuth: boolean
    authorizedUserID: number | null
    users: Array<UserType>

}
type MapDispatchToPropsType = {
    getUserProfile: (profile: any) => void
    getUserStatus: (userID: number) => void
    updateStatus: (status: string) => void
    saveSelectedPhoto: (photo: File) => void
    saveProfile: (profile: UserProfileType) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userID: any
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserID: state.auth.id,
    users: state.usersPage.users

})

class ProfileContainer extends React.Component<PropsType> {
    follow = (id: number) => {
        this.props.follow(id)
    }
    unfollow = (id: number) => {
        this.props.unfollow(id)
    }
    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.authorizedUserID
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userID !== prevProps.match.params.userID || this.props.profile.photos?.large !== prevProps.profile.photos?.large) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props} userID={this.props.authorizedUserID} isOwner={!this.props.match.params.userID} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus} saveSelectedPhoto={this.props.saveSelectedPhoto} users={this.props.users} unfollow={this.unfollow} follow={this.follow}/>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getUserStatus: getStatusTC,
        updateStatus: updateStatusTC,
        saveSelectedPhoto: saveSelectedPhotoTC,
        saveProfile: saveProfileTC,
        follow: followTC,
        unfollow: unfollowTC,
    }),
    withRouter, withAuthRedirect)(ProfileContainer)