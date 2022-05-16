import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;