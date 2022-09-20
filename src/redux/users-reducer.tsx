import {usersAPI} from "../api/api";
import {ActionsType, AppThunk} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_LOADING = "SET_IS_LOADING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
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
                ...state, users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followingInProgress: action.followingInProgress}
                    } else return u
                })
            }
        default:
            return state;
    }
}


//action creators
export const followSuccessAC = (userID: number): followACType => ({type: FOLLOW, ID: userID} as const)
export const unfollowSuccessAC = (userID: number): unfollowACType => ({type: UNFOLLOW, ID: userID} as const)
export const setUsersAC = (users: Array<UserType>): setUsersACType => ({type: SET_USERS, users: users} as const)
export const setPageAC = (currentPage: number): setPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
} as const)
export const setTotalUsersCountAC = (count: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: count
} as const)
export const setLoadingAC = (isLoading: boolean): setLoadingACType => ({type: SET_IS_LOADING, isLoading: isLoading} as const)
export const setFollowingInProgressAC = (id: number, followingInProgress: boolean): setFollowingInProgressACType => ({
    type: FOLLOWING_IN_PROGRESS,
    id: id,
    followingInProgress: followingInProgress
} as const)


//thunk creators
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setLoadingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}
export const followTC = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(setFollowingInProgressAC(id, true))
        usersAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccessAC(id))
                dispatch(setFollowingInProgressAC(id, false))
            }
        })
    }
}
export const unfollowTC = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(setFollowingInProgressAC(id, true))
        usersAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccessAC(id))
                dispatch(setFollowingInProgressAC(id, false))
            }
        })
    }
}

//types
type InitialStateType = typeof initialState
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
    followingInProgress: boolean
}

export type followACType = {
    type: "FOLLOW"
    ID: number
}
export type unfollowACType = {
    type: "UNFOLLOW"
    ID: number
}
export type setUsersACType = {
    type: "SET-USERS"
    users: Array<UserType>
}
export type setPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type setTotalUsersCountACType = {
    type: "SET_TOTAL_USERS_COUNT"
    count: number
}
export type setLoadingACType = {
    type: "SET_IS_LOADING"
    isLoading: boolean
}
export type setFollowingInProgressACType = {
    type: "FOLLOWING_IN_PROGRESS"
    id: number
    followingInProgress: boolean
}
