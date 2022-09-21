import {deleteMessageAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";

let initialState: any;
beforeEach(() => {
    initialState = {
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
})

it("message should be deleted", () => {
    //action
    let messageID = 3
    let action = deleteMessageAC(messageID)
    let newState = dialogsReducer(initialState, action)

    //expectation
    expect(newState.messages.length).toBe(5)
    expect(newState.messages[2].message).toBe("Let's go out)")
})

it("message should be sent", ()=>{
    //action
    let newMessage = "new message"
    let action = sendMessageAC(newMessage)
    let newState = dialogsReducer(initialState, action)

    //expectation
    expect(newState.messages.length).toBe(7)
    expect(newState.messages[6].message).toBe("new message")
})

