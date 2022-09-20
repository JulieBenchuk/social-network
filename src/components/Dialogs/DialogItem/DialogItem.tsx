import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
};

export const DialogItem: React.FC<DialogItemPropsType> = ({id, name, avatar, ...restProps}) => { //не выделяется активная ссылка
    let path = "messages/" + id
    return (
        <div className={classes.dialogItemLink}>
            <NavLink to={path} className={classes.dialogItem}>
                <img src={avatar} alt={name}/>
                <span>{name}</span>
            </NavLink>
        </div>
    )
}


