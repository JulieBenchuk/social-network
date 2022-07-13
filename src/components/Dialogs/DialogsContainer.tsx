import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {sendMessageCreator} from "../../redux/dialogs-reducer";

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
}
type MapStatePopsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string)=> void
}
export type DialogsPropsType = MapStatePopsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) : MapStatePopsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}
export const DialogsContainer= compose<React.ComponentType> (connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)




