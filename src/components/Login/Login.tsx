import React from 'react';

export const LoginForm = () => {
    return <div>
        <form>
            <div>
                <input placeholder="login"/>
            </div>
            <div>
                <input placeholder="password"/>
            </div>
            <div>
                <input type={"checkbox"}/> remember me
            </div>
            <div>
                <button>log in</button>
            </div>
        </form>
    </div>
}

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};
