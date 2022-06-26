import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: any
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (profile: any) => void
    getUserStatus: (userID: number ) => void
    updateStatus: (status: string)=> void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userID: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = Number(this.props.match.params.userID)
        if(!userID){
            userID=24112
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

export default compose <React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getUserStatus: getStatusThunkCreator, updateStatus: updateStatusThunkCreator}),
    withRouter, withAuthRedirect)(ProfileContainer)