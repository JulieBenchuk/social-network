import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, ...restProps}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;