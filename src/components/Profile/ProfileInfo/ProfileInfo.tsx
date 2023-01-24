import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar_default from "./../../../assets/img/avatar_default.webp"
import {UserProfileType} from "../../../api/api";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormDataType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {UserType} from "../../../redux/users-reducer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPersonCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faPersonCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {ModalWindow} from "../../../common/ModalWindow/ModalWindow";


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
                                                                userID,
                                                                users, unfollow, follow
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
        //setEditMode(false)
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
        <div className={s.profile}>

            <div className={s.avatarBlock}>
                <div className={s.profile_avatar}>
                    <img src={profile.photos?.large ? profile.photos.large : avatar_default} alt={"avatar"}/>
                    <div className={s.onlineStatus}>online</div>

                    {isOwner && <input id="upload" type="file" accept="image/*" onChange={onPhotoSelectedHandler}/>}

                    {!isOwner &&
                        <div className={followed ? s.followingStatus : `${s.followingStatus} ${s.unfollowingStatus}`} onClick={() => setActiveModalHandler(true)}>
                            {followed ? <FontAwesomeIcon icon={faPersonCircleCheck}/> : <FontAwesomeIcon icon={faPersonCircleXmark}/>}
                            {followed ? "following" : "unfollowing"}
                        </div>}

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
            </div>

            <div className={s.profileInfoBlock}>
                {editMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => setEditMode(true)}/>}
            </div>

            {activeModal && <ModalWindow active={activeModal} setActive={setActiveModalHandler}
                                         question={`Do you want to ${followed ? "unfollow" : "follow"} ${profile.fullName}?`}
                                         answerAgree={"YES, I want"} answerReject={"No, thanks"}
                                         agree={onAgreeModalHandler} reject={onRejectModalHandler}/>}
        </div>
    );
};