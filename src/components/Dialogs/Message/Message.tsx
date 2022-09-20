import React from 'react';
import s from "./../Dialogs.module.css";

export type MessagePropsType = {
    id: number
    message: string
}
export const MessageItem: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div>
            <div className={s.messageItem}>{message}</div>
        </div>
    )
}


