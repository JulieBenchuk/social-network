import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (text: string)=> void
    onChangeText: (text: string)=> void

}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost} onChangeText={props.onChangeText} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;