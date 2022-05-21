import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

/*type DialogsPropsType = {
        store: StoreType
}*/

const DialogsContainer = (/*props: DialogsPropsType*/) => {
    return (<StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                const onNewMessageBodyChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                const newMessageBody = state.dialogsPage.newMessageBody
                return <Dialogs dialogsPage={state.dialogsPage} sendMessage={onSendMessageClick}
                                changeNewMessageBody={onNewMessageBodyChange} newMessageBody={newMessageBody}/>
            }
        }
    </StoreContext.Consumer>)
}

export default DialogsContainer;


