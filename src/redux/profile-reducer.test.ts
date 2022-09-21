import {addPostAC, deletePostAC, profileReducer, setProfileStatusAC} from "./profile-reducer";

let initialState: any;

beforeEach(()=>{
    initialState = {
        posts: [
            {id: 1, post: "Hello!", likeCount: 100},
            {id: 2, post: "How many of us are here!", likeCount: 140},
            {id: 3, post: "I like this  network!", likeCount: 200},
            {id: 4, post: "Woooow", likeCount: 200},
            {id: 999, post: "To delete", likeCount: 200}
        ],
        profile: null,
        status: ""
    }
})
it("new post should be added", () => {
    //action
    let newPost = "new"
    let action = addPostAC(newPost);
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.posts.length).toBe(6);
    expect(newState.posts[5].post).toBe("new")
})

it("length of posts should be decrease after post deletion", () => {
    //action
    let postID = 999
    let action = deletePostAC(postID);
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.posts.length).toBe(4);
    expect(newState.posts.filter(p => p.id === postID)).toBeDefined();

})

it("status should be updated", () => {
    //action
    let newStatus = "new status"
    let action = setProfileStatusAC(newStatus)
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.status).toBe("new status")
})