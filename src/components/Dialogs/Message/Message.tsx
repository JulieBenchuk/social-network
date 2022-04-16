import React from 'react';
import classes from "./../Dialogs.module.css";

type MessagePropsType = {
    id: number
    message: string
}
const MessageItem = (props: MessagePropsType) => {
    return (
        <div>
            <div className={classes.messageItem}>{props.message}</div>
        </div>
    )
}

export default MessageItem;


