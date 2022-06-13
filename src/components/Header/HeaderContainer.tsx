import React from "react";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                debugger
                let data = response.data.data
                this.props.setUserData(data.email, data.id, data.login, data.isAuth)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);