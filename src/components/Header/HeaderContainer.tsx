import React from "react";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    email: string | null
    login: string | null
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode===0){
                let {id, email, login} = response.data.data
                this.props.setUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);