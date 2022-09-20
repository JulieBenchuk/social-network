import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, updateStatus, status, ...restProps}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.profile_top}>
                <img
                    src="https://www.xmple.com/wallpaper/blue-violet-gradient-linear-1920x1080-c2-1e90ff-66078b-a-225-f-14.svg"/>
            </div>
            <div className={s.profileInfo}>

                <div className={s.profile_avatar}>
                    <img src={profile.photos.small}/>
                </div>
                <div className={s.description}>
                    <h2>{profile.fullName}</h2>
                    <p>{profile.aboutMe}</p>
                    <p>Looking job: {profile.lookingForAJobDescription}</p>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </>
    );

};