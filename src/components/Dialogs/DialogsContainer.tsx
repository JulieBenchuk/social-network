import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageBodyChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    const newMessageBody = state.dialogsPage.newMessageBody

    return (
      <Dialogs dialogsPage={state.dialogsPage} sendMessage={onSendMessageClick} changeNewMessageBody= {onNewMessageBodyChange} newMessageBody={newMessageBody}/>
    )
}

export default DialogsContainer;


