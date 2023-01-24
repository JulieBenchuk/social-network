import React, {ChangeEvent, useState} from 'react';
import style from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader";
import {UserProfileType} from "../../../api/api";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormDataType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {UserType} from "../../../redux/users-reducer";
import {ModalWindow} from "../../../common/ModalWindow/ModalWindow";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";


type ProfileInfoPropsType = {
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

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                updateStatus,
                                                                status,
                                                                isOwner,
                                                                saveSelectedPhoto,
                                                                saveProfile,
                                                                users, unfollow, follow, ...restProps
                                                            }) => {

    const [editMode, setEditMode] = useState(false)
    const [activeModal, setActiveModal] = useState(false)

    const followed = users.find(u => u.id === profile.userId)?.followed

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
        setEditMode(false)
    }
    const setActiveModalHandler = (value: boolean) => {
        setActiveModal(value)
    }
    const onAgreeModalHandler = () => {
        if (followed) {
            profile.userId && unfollow(profile.userId)
            setActiveModal(false)
        } else {
            profile.userId && follow(profile.userId)
            setActiveModal(false)
        }
    }
    const onRejectModalHandler = () => {
        setActiveModal(false)
    }

    return (
        <div className={style.profile}>

            <ProfileAvatar photos={profile.photos} owner={isOwner} onChange={onPhotoSelectedHandler} followed={followed}
                           onClick={() => setActiveModalHandler(true)} status={status} updateStatus={updateStatus}/>

            <div className={style.profileInfoBlock}>
                {editMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => setEditMode(true)}/>}
            </div>

            {activeModal && <ModalWindow active={activeModal} setActive={setActiveModalHandler}
                                         question={`Do you want to ${followed ? "unfollow" : "follow"} ${profile.fullName}?`}
                                         answerAgree={"YES, I want"} answerReject={"NO, thanks"}
                                         agree={onAgreeModalHandler} reject={onRejectModalHandler}/>}
        </div>
    );
};