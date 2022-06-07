const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
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
type setCurrentPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type setTotalUsersCountACType = {
    type: "SET_TOTAL_USERS_COUNT"
    count: number
}


type ActionsType = followACType | unfollowACType | setUsers | setCurrentPageACType | setTotalUsersCountACType


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
                ...state, users: action.users
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export const followAC = (userID: number): followACType => ({type: FOLLOW, ID: userID})
export const unFollowAC = (userID: number): unfollowACType => ({type: UNFOLLOW, ID: userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCountAC = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count: count})


