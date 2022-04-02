import React from "react";
import classes from "./Post.module.css";


type PostPropsType = {
    message: string
    like: number
}
const Post = (props:PostPropsType) => {
    return (
        <div className={classes.item}>
            <img
                src="https://media.istockphoto.com/photos/armored-superhero-picture-id1304490906?b=1&k=20&m=1304490906&s=170667a&w=0&h=3uVpIGiOjPZLhOwqkmH6BjqZilUsMVj1SupxWSmCvww="/>
            {props.message}
            <div>
                <span>Like</span> {props.like}
            </div>
        </div>
    )
}

export default Post;