import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../api/api";


type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveSelectedPhoto: (photo: File) => void
    saveProfile: (profile: UserProfileType) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 profile,
                                                 status,
                                                 updateStatus,
                                                 isOwner,
                                                 saveSelectedPhoto,
                                                 saveProfile,
                                                 ...restProps
                                             }) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                         saveSelectedPhoto={saveSelectedPhoto} saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;