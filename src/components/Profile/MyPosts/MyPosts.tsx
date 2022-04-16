import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    let postsData = [
        {id: 1, post: "Hello!", likeCount: 100},
        {id: 2, post: "How many of us are here!", likeCount: 140},
        {id: 3, post: "I like this network!", likeCount: 200},
        {id: 4, post: "Woooow", likeCount: 200}
    ]
    return (
        <div>
            <div className={classes.myPostsHeader}>
                My posts
            </div>
            <div className={classes.textArea_Button}>
                <div>
                    <textarea placeholder={"What's new?"}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsData.map(post => (<Post id={post.id} post={post.post} likeCount={post.likeCount}/>))}
        </div>
    )
}

export default MyPosts;