import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        changeNewMessageBody: (body: string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)




