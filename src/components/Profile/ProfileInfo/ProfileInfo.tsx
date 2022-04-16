import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.profile_top}>
                <img
                    src="https://www.xmple.com/wallpaper/blue-violet-gradient-linear-1920x1080-c2-1e90ff-66078b-a-225-f-14.svg"/>
            </div>
            <div className={classes.profile_avatar}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/004/899/833/large_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"/>
            </div>
            <div className={classes.description}>
                Description
            </div>
        </div>
    );
};

export default ProfileInfo;