import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar_default from "./../../../assets/img/avatar_default.webp"
import {UserProfileType} from "../../../api/api";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormDataType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";


type ProfileInfoPropsType = {
    userID: number | null
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
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }


    const onPhotoSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            saveSelectedPhoto(e.target.files[0])
        }
    }
    const onSubmit = (profile: ProfileDataFormDataType) => {
        saveProfile(profile)
        //setEditMode(false)
    }

    return (
        <div className={s.profile}>

            <div className={s.avatarBlock}>
                <div className={s.profile_avatar}>
                    <img src={profile.photos?.large ? profile.photos.large : avatar_default} alt={"avatar"}/>
                    {isOwner && <input type="file" onChange={onPhotoSelectedHandler}/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
            </div>

            <div className={s.profileInfoBlock}>
                {editMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    );

};