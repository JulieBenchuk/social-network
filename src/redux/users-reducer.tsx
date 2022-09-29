import {usersAPI} from "../api/api";
import {ActionsType, AppThunk} from "./redux-store";
import {setLoadingAC} from "./app-reducer";
import {serverErrorHandler} from "../utils/serverErrorHandler";
import {AxiosError} from "axios";

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING_IN_PROGRESS"

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
export const setFollowingInProgressAC = (id: number, followingInProgress: boolean): setFollowingInProgressACType => ({
    type: FOLLOWING_IN_PROGRESS,
    id: id,
    followingInProgress: followingInProgress
} as const)


//thunk creators
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
                dispatch(setLoadingAC(false))
            })
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
            })

    }
}
export const followTC = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(setFollowingInProgressAC(id, true))
        dispatch(setLoadingAC(true))
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccessAC(id))
                    dispatch(setFollowingInProgressAC(id, false))
                }
                dispatch(setLoadingAC(false))
            })
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
            })
    }
}
export const unfollowTC = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(setFollowingInProgressAC(id, true))
        dispatch(setLoadingAC(true))
        usersAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(id))
                    dispatch(setFollowingInProgressAC(id, false))
                }
                dispatch(setLoadingAC(false))
            })
            .catch((e) => {
                serverErrorHandler(e as AxiosError | Error, dispatch)
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
    type: "users/FOLLOW"
    ID: number
}
export type unfollowACType = {
    type: "users/UNFOLLOW"
    ID: number
}
export type setUsersACType = {
    type: "users/SET-USERS"
    users: Array<UserType>
}
export type setPageACType = {
    type: "users/SET_CURRENT_PAGE"
    currentPage: number
}
export type setTotalUsersCountACType = {
    type: "users/SET_TOTAL_USERS_COUNT"
    count: number
}
export type setFollowingInProgressACType = {
    type: "users/FOLLOWING_IN_PROGRESS"
    id: number
    followingInProgress: boolean
}
