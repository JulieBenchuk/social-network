import React from 'react';
import style from "./Dialogs.module.css";
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem"
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/Forms-control/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {SuperButton} from "../../common/SuperButton/SuperButton";


const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)

    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsBlock}>
                <div className={style.dialogItems}>
                    {state.dialogs.map((d, index) => (
                        <DialogItem key={index} id={d.id} name={d.name} avatar={d.avatar}/>))}
                </div>
                <div className={style.messageItems}>
                    {state.messages.map(message => (
                        <MessageItem key={message.id} id={message.id} message={message.message}/>))}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLengthCreator100 = maxLengthCreator(100);
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addMessageForm}>
            <Field component={Textarea} name="newMessageBody" placeholder="Enter your message..."
                   validate={[required, maxLengthCreator100]} className={style.field}/>

            <SuperButton type={"submit"}>Send message</SuperButton>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;


