import React from 'react';
import s from "./Dialogs.module.css";
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem"
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/Forms-control/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {state.dialogs.map((d, index) => (<DialogItem key={index} id={d.id} name={d.name} avatar={d.avatar}/>))}
            </div>
            <div className={s.messageItems}>
                {state.messages.map(message => (
                    <MessageItem id={message.id} message={message.message}/>))}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLengthCreator100 = maxLengthCreator(100);
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.sendMessageBlock}>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message..."
                       validate={[required, maxLengthCreator100]}/>

                <button>Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;


