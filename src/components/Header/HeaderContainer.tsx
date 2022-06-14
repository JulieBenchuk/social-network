import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

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
        isAuth: state.auth.isAuth
    }
}

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        usersAPI.authMe().then(response => {
            if (response.resultCode === 0) {
                let data = response.data
                this.props.setUserData(data.email, data.id, data.login, data.isAuth)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);