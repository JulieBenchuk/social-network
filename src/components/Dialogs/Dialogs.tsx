import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import MessageItem from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ActionsType, DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: ()=>void
    newMessageBodyChange: (text: string)=> void
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {
    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.currentTarget.value
        props.newMessageBodyChange(newMessageBody)

    }
    const newMessageBody = props.newMessageBody

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} name={d.name} avatar={d.avatar}/>))}
            </div>
            <div className={classes.messageItems}>
                {props.dialogsPage.messages.map(message => (
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


