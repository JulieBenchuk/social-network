import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder="password" name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>log in</button>
            </div>
        </form>
    </div>
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
export const Login = () => {
    const onSubmit = (formData: any)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
