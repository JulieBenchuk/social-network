import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getStatusTC,
    getUserProfileTC, saveSelectedPhotoTC,
    updateStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: any
    isAuth: boolean
    authorizedUserID: number | null

}
type MapDispatchToPropsType = {
    getUserProfile: (profile: any) => void
    getUserStatus: (userID: number) => void
    updateStatus: (status: string) => void
    saveSelectedPhoto: (photo: File) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userID: any
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    authorizedUserID: state.auth.id

})

class ProfileContainer extends React.Component<PropsType> {
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
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userID} profile={this.props.profile}
                     status={this.props.profile.status}
                     updateStatus={this.props.updateStatus} saveSelectedPhoto={this.props.saveSelectedPhoto}/>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getUserStatus: getStatusTC,
        updateStatus: updateStatusTC,
        saveSelectedPhoto: saveSelectedPhotoTC
    }),
    withRouter, withAuthRedirect)(ProfileContainer)