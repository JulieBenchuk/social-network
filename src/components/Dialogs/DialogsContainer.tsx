import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
    avatar: string
}
type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
type MapStatePopsType = {
    dialogsPage: DialogsPageType
    newMessageBody: string
}
type MapDispatchToPropsType = {
    changeNewMessageBody: (body: string)=>void
    sendMessage: ()=> void
}
export type DialogsPropsType = MapStatePopsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) : MapStatePopsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeNewMessageBody: (body: string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}
export const DialogsContainer= compose<React.ComponentType> (connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)




