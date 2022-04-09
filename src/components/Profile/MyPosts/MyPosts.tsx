import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div className={classes.myPostsHeader}>
                My posts
            </div>
            <div className={classes.textArea_Button}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post id={1} post={"Hello!"} like = {150}/>
            <Post id={2} post={"How many of us are here!"} like = {100}/>
            <Post id={3} post={"Follow me)"} like = {99}/>
            <Post id={4} post={"I like this network"} like = {50}/>
        </div>
    );
}

export default MyPosts;