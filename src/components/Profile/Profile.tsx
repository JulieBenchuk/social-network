import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../api/api";
import style from "./Profile.module.css"
import {UserType} from "../../redux/users-reducer";


type ProfilePropsType = {
    userID: number | null
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveSelectedPhoto: (photo: File) => void
    saveProfile: (profile: UserProfileType) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 userID,
                                                 profile,
                                                 status,
                                                 updateStatus,
                                                 isOwner,
                                                 saveSelectedPhoto,
                                                 saveProfile,
                                                 users, unfollow, follow
                                             }) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                         saveSelectedPhoto={saveSelectedPhoto} saveProfile={saveProfile} userID={userID} users={users} unfollow={unfollow} follow={follow}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;