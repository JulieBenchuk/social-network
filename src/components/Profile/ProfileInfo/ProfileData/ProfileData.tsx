import React from 'react';
import s from "./ProfileData.module.css";
import {UserProfileType} from "../../../../api/api";
import {Contact} from "../../Contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard} from '@fortawesome/free-regular-svg-icons'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLink} from '@fortawesome/free-solid-svg-icons'
import { faPen} from '@fortawesome/free-solid-svg-icons'
import {SuperButton} from "../../../../common/SuperButton/SuperButton";

export type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    setEditMode: ()=>void
}
export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, setEditMode}) => {
    return (
        <div className={s.profile_data}>
            <div className={s.description}>
                <h2>{profile.fullName}</h2>
                <div className={s.descriptionItem}>
                    <FontAwesomeIcon icon={faAddressCard} className={s.descriptionIcon}/>
                    <b> About me: </b>
                    {profile.aboutMe ? profile.aboutMe : "description is empty"}
                </div>
                <div className={s.descriptionItem}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={s.descriptionIcon}/>
                    <b> Looking for a job: </b>
                    {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div className={s.descriptionItem}>
                    <FontAwesomeIcon icon={faCircleCheck} className={s.descriptionIcon}/>
                    <b> My skills: : </b>
                    {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "description is empty"}
                </div>
                <div className={s.descriptionItem}>
                    <FontAwesomeIcon icon={faLink} className={s.descriptionIcon}/>
                    <b> Contacts: </b>
                    {profile.contacts && Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>
            {isOwner && <div className={s.edit}>
                <SuperButton onClick={setEditMode}>
                    <FontAwesomeIcon icon={faPen} className={s.descriptionIcon}/>
                    {" Edit profile"}
                </SuperButton>
            </div>}
        </div>
    );
};
