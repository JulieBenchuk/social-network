import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


type ProfilePropsType = {
    profile: any
    isAuth: boolean
}
const Profile = (props: ProfilePropsType) => {
    if(!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;