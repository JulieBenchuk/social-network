import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        email: state.auth.email,
        id: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

class HeaderContainer extends React.Component<any> {

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);