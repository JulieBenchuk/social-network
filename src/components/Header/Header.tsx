import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logout: ()=> void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={style.header}>
            <img src="https://www.citypng.com/public/uploads/preview/-41601584220o1ckpwphjh.png"/>
            <div className={style.loginBlock}>
                {isAuth
                    ? <div>{login}  <button onClick={logout}>log out</button></div>
                    : <NavLink to={"/login"}>Log In</NavLink>}
            </div>
        </header>
    )
}