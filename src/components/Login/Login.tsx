import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/forms-control/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
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
            <div>
                <button>log in</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    } 
}
export default connect(mapStateToProps, {login})(Login)
