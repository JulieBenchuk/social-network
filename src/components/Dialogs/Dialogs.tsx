import React from 'react';
import classes from "./Dialogs.module.css";
import MessageItem, {MessagePropsType} from "./Message/Message";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem"

type DialogsPropsType = {
    message: Array<MessagePropsType>
    dialog: Array<DialogItemPropsType>
}
const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.dialog.map(d => (<DialogItem id={d.id} name={d.name}/>))}
            </div>
            <div className={classes.messageItems}>
                {props.message.map(message => (
                    <MessageItem id={message.id} message={message.message}/>))}
            </div>
        </div>
    )
}

export default Dialogs;


