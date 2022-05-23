const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type UserType = {
    id: number
    fullName: string
    status: string
    followed: boolean
    location: { country: string, city: string }
    avatar: string
}
type InitialStateType = {
    users: Array<UserType>
}
type followACType = {
    type: "FOLLOW"
    ID: number
}
type unfollowACType = {
    type: "UNFOLLOW"
    ID: number
}
type setUsers = {
    type: "SET-USERS"
    users: Array<UserType>
}
type ActionsType = followACType | unfollowACType | setUsers
let initialState = {
    users: [
        {
            id: 1,
            fullName: "Julie B.",
            status: "I'm kroshka ben",
            followed: true,
            location: {country: "Belarus", city: "Homiel"},
            avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        },
        {
            id: 2,
            fullName: "Nikita K.",
            status: "ololo)))",
            followed: false,
            location: {country: "Russia", city: "Moscow"},
            avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        },
        {
            id: 3,
            fullName: "Marina V.",
            status: "I ike flowers",
            followed: true,
            location: {country: "Ukraine", city: "Chernigiv"},
            avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        },
        {
            id: 4,
            fullName: "Denis K.",
            status: "Escaped from regime of Lukashenko",
            followed: true,
            location: {country: "Lithuania", city: "Vilnius"},
            avatar: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png"
        },
    ]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (action.ID === u.id) {
                        return {...u, followed: true}
                    } else return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (action.ID === u.id) {
                        return {...u, followed: false}
                    } else return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userID: number): followACType => ({type: FOLLOW, ID: userID})
export const unFollowAC = (userID: number): unfollowACType => ({type: UNFOLLOW, ID: userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users})

