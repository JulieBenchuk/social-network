import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={classes.item}>
                My posts
            </div>
            <div className={classes.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={"Hello!"} like = {150}/>
            <Post message={"How many of us are here!"} like = {100}/>
            <Post message={"Follow me)"} like = {99}/>
            <Post message={"I like this network"} like = {50}/>
        </div>
    );
}

export default MyPosts;