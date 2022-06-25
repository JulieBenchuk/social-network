import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import MessageItem from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.changeNewMessageBody(body)
    }
    const newMessageBody = props.newMessageBody

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {state.dialogs.map((d, index) => (<DialogItem key={index} id={d.id} name={d.name} avatar={d.avatar}/>))}
            </div>
            <div className={classes.messageItems}>
                {state.messages.map(message => (
                    <MessageItem id={message.id} message={message.message}/>))}
                <div className={classes.sendMessageBlock}>
                    <textarea placeholder={"Enter your message..."} value={newMessageBody} onChange={onNewMessageBodyChange}></textarea>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;


