const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

type UserType = {
    id: number
    fullName: string
    status: string
    followed: boolean
    location: { country: string, city: string }
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
type ActionsType = followACType | unfollowACType
let initialState = {
    users: [
        {
            id: 1,
            fullName: "Julie B.",
            status: "I'm kroshka ben",
            followed: true,
            location: {country: "Belarus", city: "Homiel"}
        },
        {
            id: 2,
            fullName: "Nikita K.",
            status: "ololo)))",
            followed: false,
            location: {country: "Russia", city: "Moscow"}
        },
        {
            id: 3,
            fullName: "Marina V.",
            status: "I ike flowers",
            followed: true,
            location: {country: "Ukraine", city: "Chernigiv"}
        },
        {
            id: 4,
            fullName: "Denis K.",
            status: "Escaped from regime of Lukashenko",
            followed: true,
            location: {country: "Lithuania", city: "Vilnius"}
        },
    ]
}

export const userReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (action.ID === u.id) {
                        return {...u, followed: true}
                    } else return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (action.ID === u.id) {
                        return {...u, followed: false}
                    } else return u;
                })
            }
        default:
            return state;
    }
}

export const followAC = (userID: number): followACType => ({type: FOLLOW, ID: userID})
export const unFollowAC = (userID: number): unfollowACType => ({type: UNFOLLOW, ID: userID})

