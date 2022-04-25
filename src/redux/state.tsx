let rerenderEntireTree = () => {
    console.log("Tree is rerendering")
}

export type PostType = {
    id: number
    post: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, post: "Hello!", likeCount: 100},
            {id: 2, post: "How many of us are here!", likeCount: 140},
            {id: 3, post: "I like this network!", likeCount: 200},
            {id: 4, post: "Woooow", likeCount: 200}
        ],
        newPostText: ""
    },
    dialogsPage: {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        post: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=""
    rerenderEntireTree()
}
export const onChangeText = (text: string)=> {
    state.profilePage.newPostText=text
    rerenderEntireTree()
}
export const subscriber = (observer: ()=>void) => {
    rerenderEntireTree=observer
}
