import {addPostAC, profileReducer, setProfileStatusAC} from "./profile-reducer";

//data
let initialState = {
    posts: [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this  network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200}
    ],
    profile: null,
    status: ""
}

it("new post should be added", ()=>{

    //action
    let newPost = "new"
    let action = addPostAC(newPost);
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].post).toBe("new")
})
it("status should be updated", ()=>{

    //action
    let newStatus = "new status"
    let action = setProfileStatusAC(newStatus)
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.status).toBe("new status")
})