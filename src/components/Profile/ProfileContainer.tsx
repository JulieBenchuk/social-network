import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: any
}
type MapDispatchToPropsType = {
    getUserProfile: (profile: any) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userID: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        this.props.getUserProfile(userID)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const WithUrlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(WithUrlDataContainer);