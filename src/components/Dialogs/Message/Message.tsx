import React from 'react';
import classes from "./../Dialogs.module.css";

export type MessagePropsType = {
    id: number
    message: string
}
export const MessageItem: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div>
            <div className={classes.messageItem}>{message}</div>
        </div>
    )
}


