import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import MessageItem from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ActionsType, DialogsPageType, StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageBodyChange = (newMessageBody: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(newMessageBody))

    }
    const newMessageBody = state.dialogsPage.newMessageBody

    return (
      <Dialogs dialogsPage={state.dialogsPage} sendMessage={onSendMessageClick}  newMessageBodyChange = {onNewMessageBodyChange} newMessageBody={newMessageBody}/>
    )
}

export default DialogsContainer;


