import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logout: ()=> void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={style.header}>
            <FontAwesomeIcon icon={faUserAstronaut} className={style.socNetworkLogo}/>
            <div className={style.loginBlock}>
                {isAuth
                    ? <div>{login}  <button onClick={logout}>log out</button></div>
                    : <NavLink to={"/login"}>Log In</NavLink>}
            </div>
        </header>
    )
}