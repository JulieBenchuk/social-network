import React from 'react';
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader";

type ProfileInfoPropsType = {
    profile: any
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
        return (
            <div className={classes.profileInfo}>
                <div className={classes.profile_top}>
                    <img
                        src="https://www.xmple.com/wallpaper/blue-violet-gradient-linear-1920x1080-c2-1e90ff-66078b-a-225-f-14.svg"/>
                </div>
                <div className={classes.profile_avatar}>
                    <img src={props.profile.photos.small}/>
                </div>
                <div className={classes.description}>
                    <h2>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                    <p>Looking job: {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        );

};

export default ProfileInfo;