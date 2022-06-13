import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    email: string | null
    login: string | null
    isAuth: boolean
}
const Header = (props: any) => {
    return (
        <header className={style.header}>
            <img src="https://www.citypng.com/public/uploads/preview/-41601584220o1ckpwphjh.png"/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}</div>
                    : <NavLink to={"/login"}>Log In</NavLink>}
            </div>
        </header>
    )
}

export default Header;