import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

type ProfilePropsType = {
    posts: Array<PostPropsType>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;