import React from 'react';
import classes from "./Dialogs.module.css";
import MessageItem, {MessagePropsType} from "./Message/Message";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem"

type DialogsPropsType = {
    message: Array<MessagePropsType>
    dialog: Array<DialogItemPropsType>
}
const Dialogs = (props: DialogsPropsType) => {
    const sendMessage = () => {
      alert(newMessageRef.current?.value)
    }
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.dialog.map(d => (<DialogItem id={d.id} name={d.name} avatar={d.avatar}/>))}
            </div>
            <div className={classes.messageItems}>
                {props.message.map(message => (
                    <MessageItem id={message.id} message={message.message}/>))}
                <div className={classes.sendMessageBlock}>
                    <textarea ref={newMessageRef}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;


