import React from 'react';
import classes from "./Dialogs.module.css";
import MessageItem from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    const addNewMessage = (values: any)=> {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {state.dialogs.map((d, index) => (<DialogItem key={index} id={d.id} name={d.name} avatar={d.avatar}/>))}
            </div>
            <div className={classes.messageItems}>
                {state.messages.map(message => (
                    <MessageItem id={message.id} message={message.message}/>))}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.sendMessageBlock}>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message..."/>

                <button>Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;


