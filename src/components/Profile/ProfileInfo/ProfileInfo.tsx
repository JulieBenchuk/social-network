import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar_default from "./../../../assets/img/avatar_default.webp"
import {UserProfileType} from "../../../api/api";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormDataType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveSelectedPhoto: (photo: File) => void
    saveProfile: (profile: UserProfileType) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                updateStatus,
                                                                status,
                                                                isOwner,
                                                                saveSelectedPhoto,
                                                                saveProfile,
                                                                ...restProps
                                                            }) => {
    if (!profile) {
        return <Preloader/>
    }

    const [editMode, setEditMode] = useState(false)

    const onPhotoSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            saveSelectedPhoto(e.target.files[0])
        }
    }
    const onSubmit = (profile: UserProfileType) => {
        saveProfile(profile)
    }

    return (
        <>
            <div className={s.profile_top}>
                <img
                    src="https://www.xmple.com/wallpaper/blue-violet-gradient-linear-1920x1080-c2-1e90ff-66078b-a-225-f-14.svg"/>
            </div>

            <div className={s.profileInfo}>
                <div className={s.profile_avatar}>
                    <img src={profile.photos ? profile.photos.large : avatar_default}/>
                </div>

                {isOwner && <input type="file" onChange={onPhotoSelectedHandler}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => setEditMode(true)}/>}
            </div>
        </>
    );

};