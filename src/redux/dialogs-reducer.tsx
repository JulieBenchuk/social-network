import {ActionsType, DialogsPageType, MessageType} from "./store";

export type updateMessageType = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    message: string
}
export type sendMessageType = {
    type: "SEND_MESSAGE"
}
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Wow! You look great!"},
        {id: 4, message: "Let's go out)"},
        {id: 5, message: "Nice to meet you!"},
        {id: 6, message: "I'm Julie."}

    ],
    dialogs: [
        {
            id: 1,
            name: "Aleksandra",
            avatar: "https://image.shutterstock.com/z/stock-vector-portrait-of-an-asian-girl-with-pink-hair-avatar-for-a-social-network-subcultures-anime-and-1397661953.jpg"
        },
        {
            id: 2,
            name: "Vladislav",
            avatar: "https://static.vecteezy.com/system/resources/previews/002/275/817/large_2x/asian-female-avatar-woman-icon-for-network-vector.jpg"
        },
        {
            id: 3,
            name: "Veronika",
            avatar: "https://as1.ftcdn.net/v2/jpg/02/85/98/20/1000_F_285982046_zzxKDt4O2ntMLBObfqU2bdEovgRclEqa.jpg"
        }
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
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