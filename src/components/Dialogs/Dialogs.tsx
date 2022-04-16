import React from 'react';
import classes from "./Dialogs.module.css";
import MessageItem from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = () => {
    let messagesData = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Wow! You look great!"},
        {id: 4, message: "Let's go out)"},
        {id: 5, message: "Nice to meet you!"},
        {id: 6, message: "I'm Julie."}

    ]
    let dialogsData = [
        {id: 1, name: "Aleksandra"},
        {id: 2, name: "Vladislav"},
        {id: 3, name: "Veronika"}
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsData.map(dialog => (<DialogItem id={dialog.id} name={dialog.name}/>))}
            </div>
            <div className={classes.messageItems}>
                {messagesData.map(message => (
                    <MessageItem id={message.id} message={message.message}/>))}
            </div>
        </div>
    )
}

export default Dialogs;


