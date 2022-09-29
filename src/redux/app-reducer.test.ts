import {appReducer, setInitializedSuccessAC} from "./app-reducer";

//data
let initialState = {
    isInitializedSuccess: false,
    isLoading: false,
    error: ""
}

it("app should be initialized", () => {
    //actions
    let action = setInitializedSuccessAC()
    let newState = appReducer(initialState, action)
    //expectation
    expect(newState.isInitializedSuccess).toBe(true)
})
