import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../api/api";
import style from "./Profile.module.css"


type ProfilePropsType = {
    userID: number | null
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveSelectedPhoto: (photo: File) => void
    saveProfile: (profile: UserProfileType) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 userID,
                                                 profile,
                                                 status,
                                                 updateStatus,
                                                 isOwner,
                                                 saveSelectedPhoto,
                                                 saveProfile,
                                                 ...restProps
                                             }) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                         saveSelectedPhoto={saveSelectedPhoto} saveProfile={saveProfile} userID={userID}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;