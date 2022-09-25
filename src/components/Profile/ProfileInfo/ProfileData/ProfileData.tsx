import React from 'react';
import s from "./ProfileData.module.css";
import {UserProfileType} from "../../../../api/api";
import {Contact} from "../../Contact/Contact";

type ProfileDataPropsType = {
    profile: UserProfileType
}
export const ProfileData: React.FC<ProfileDataPropsType> = ({profile}) => {
    return (
        <div className={s.description}>
            <h2>{profile.fullName}</h2>
            <div>
                <b>About me: </b>
                {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Looking job: </b>
                {profile.lookingForAJobDescription ? "yes" : "no"}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>
    );
};
