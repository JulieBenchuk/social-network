import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import profile from "./Profile";

type MapStateToPropsType = {
    profile: any
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any)=> void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userID: string
}
type PropsType = RouteComponentProps<PathParamsType>&OwnPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID){
            userID="24112"
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userID).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
const WithUrlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile: setUserProfile}) (WithUrlDataContainer);