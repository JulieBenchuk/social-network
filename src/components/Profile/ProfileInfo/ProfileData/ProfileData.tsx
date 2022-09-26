import React from 'react';
import s from "./ProfileData.module.css";
import {UserProfileType} from "../../../../api/api";
import {Contact} from "../../Contact/Contact";

export type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    setEditMode: ()=>void
}
export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, setEditMode}) => {
    return (
        <div className={s.profile_data}>
            {isOwner && <div className={s.edit}>
                <button onClick={setEditMode}>Edit profile</button>
            </div>}
            <div className={s.description}>
                <h2>{profile.fullName}</h2>
                <div>
                    <b>About me: </b>
                    {profile.aboutMe}
                </div>
                <div>
                    <b>Looking job: </b>
                    {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    <b>My skills: : </b>
                    {profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>Contacts: </b>
                    {profile.contacts && Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>
        </div>
    );
};
