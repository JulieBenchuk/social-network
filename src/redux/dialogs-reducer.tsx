import {ActionsType, DialogsPageType, MessageType, sendMessageType, updateMessageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            const newMessage: MessageType = {
                id: 7,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ""
            return state;
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.message
            return state;
        default: return  state;
    }
}
export const sendMessageCreator = (): sendMessageType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newMessage: string): updateMessageType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    message: newMessage
})