import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
};

const DialogItem = (props: DialogItemPropsType) => { //не выделяется активная ссылка
    let path = "messages/" + props.id
    return (
        <div className={classes.dialogItemLink}>
            <NavLink to={path} className={classes.dialogItem}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;


