import {ActionsType} from "./redux-store";

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
    ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SEND_MESSAGE": {
            const newMessage: MessageType = {
                id: 7,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}
export const sendMessageAC = (newMessageBody: string): sendMessageType => ({type: SEND_MESSAGE, newMessageBody: newMessageBody} as const)

//types
type InitialStateType = typeof initialState

export type sendMessageType = {
    type: "SEND_MESSAGE",
    newMessageBody: string
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
    avatar: string
}


