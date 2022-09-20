import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getStatusTC,
    getUserProfileTC,
    updateStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: any
    status: string
    isAuth: boolean
    authorizedUserID: number | null

}
type MapDispatchToPropsType = {
    getUserProfile: (profile: any) => void
    getUserStatus: (userID: number ) => void
    updateStatus: (status: string)=> void
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
    authorizedUserID: state.auth.id

})

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID){
            userID=this.props.authorizedUserID
            if (!userID){
                this.props.history.push("/login")
            }
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
    connect(mapStateToProps, {getUserProfile: getUserProfileTC, getUserStatus: getStatusTC, updateStatus: updateStatusTC}),
    withRouter, withAuthRedirect)(ProfileContainer)