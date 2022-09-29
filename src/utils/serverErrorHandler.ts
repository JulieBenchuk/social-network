import axios, { AxiosError } from 'axios'
import {Dispatch} from "redux";
import {setAppErrorAC, setLoadingAC} from "../redux/app-reducer";


export const serverErrorHandler = (
    error: Error | AxiosError<{ error: string }>,
    dispatch: Dispatch
): void => {
    const err = error as Error | AxiosError<{ error: string }>

    if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message

        console.log(error)
        dispatch(setAppErrorAC(error))
    } else {
        dispatch(setAppErrorAC('more details in the console'))
    }
    dispatch(setLoadingAC(false))
}
