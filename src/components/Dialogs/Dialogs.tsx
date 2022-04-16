import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink, Route} from "react-router-dom";
import Profile from "../Profile/Profile";

type DialogPropsType = {
    id: number
    name: string
};
type MessagePropsType = {
    id: number
    message: string
}
const MessageItem = (props: MessagePropsType) => {
    return (
        <div>
            <div className={classes.triangle}>
                <div className={classes.messageItem}>{props.message}</div>
            </div>
        </div>
    )
}
const DialogItem = (props: DialogPropsType) => {
    let path = "messages/" + props.id
    return (
        <div className={classes.dialogItemLink}>
            <NavLink to={path} className={classes.dialogItem}>{props.name}</NavLink>
        </div>
    )
}
const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem id={1} name={"Aleksandra"}/>
                <DialogItem id={2} name={"Vladislav"}/>
                <DialogItem id={3} name={"Ekaterina"}/>
            </div>
            <div className={classes.messageItems}>
                <MessageItem id={1} message={"Hello!"}/>
                <MessageItem id={2} message={"How are you?"}/>
                <MessageItem id={3} message={"Wow! You look great!"}/>
                <MessageItem id={4} message={"Let's go out))"}/>
            </div>
        </div>
    )
}

export default Dialogs


