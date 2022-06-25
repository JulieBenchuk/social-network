import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileStatusThunkCreator,
    getUserProfileThunkCreator,
    updateProfileStatusThunkCreator
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
    getUserStatus: (userID: string) => void
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
        debugger
        let userID = this.props.match.params.userID
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

export default compose(withAuthRedirect,
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getUserStatus: getProfileStatusThunkCreator, updateStatus: updateProfileStatusThunkCreator}),
    withRouter)(ProfileContainer)