import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
};

const DialogItem = (props: DialogItemPropsType) => { //не выделяется активная ссылка
    let path = "messages/" + props.id
    return (
        <div className={classes.dialogItemLink}>
            <NavLink to={path} className={classes.dialogItem}>
                <img src={props.avatar} alt={props.name}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default DialogItem;


