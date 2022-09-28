import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/Forms-control/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from "../../common/Forms-control/FormsControl.module.css"

type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="email" name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="password" name={"password"} type={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {}
            {error && <div className={style.formSummaryError}> {error} </div>}
            <div>
                <button>log in</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm)
type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType= {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<MapStateToPropsType&MapDispatchToPropsType> = ({login, isAuth}) => {
    const onSubmit = (formData: LoginFormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login: loginTC})(Login)
