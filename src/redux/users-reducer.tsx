const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string,
        large: string
    }
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
type setUsers = {
    type: "SET-USERS"
    users: Array<UserType>
}
type ActionsType = followACType | unfollowACType | setUsers
let initialState = {
    users: []
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

