import {followSuccessAC, setFollowingInProgressAC, setPageAC, usersReducer} from "./users-reducer";

//data
let initialState = {
    users: [{
        name: "Julie",
        id: 1,
        status: "status",
        followed: false,
        followingInProgress: false,
        uniqueUrlName: "",
        photos: {small: "", large: ""},
        location: {country: "Belarus", city: "Gomel"}
    }],
    pageSize: 1,
    totalUsersCount: 1,
    currentPage: 1
}
it("user should ne followed", () => {
    //actions
    let action = followSuccessAC(1)
    let newState = usersReducer(initialState, action)

    //expectation
    expect(newState.users[0].followed).toBe(true)
})
it("page should be set", ()=>{
    //actions
    let action = setPageAC(2)
    let newState = usersReducer(initialState, action)

    //expectation
    expect(newState.currentPage).toBe(2)
})
it("set following status", ()=>{
    //actions
    let action = setFollowingInProgressAC(1, true)
    let newState = usersReducer(initialState, action)

    //expectation
    expect(newState.users[0].followingInProgress).toBe(true)
})