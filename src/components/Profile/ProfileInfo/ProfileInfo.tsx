import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profile_top}>
                <img
                    src="https://previews.123rf.com/images/godruma/godruma1905/godruma190500132/123182674-abstract-big-data-futuristic-light-wallpaper-design-.jpg"/>
            </div>
            <div className={classes.profile_avatar}>
                <img
                    src="https://media.istockphoto.com/photos/armored-superhero-picture-id1304490906?b=1&k=20&m=1304490906&s=170667a&w=0&h=3uVpIGiOjPZLhOwqkmH6BjqZilUsMVj1SupxWSmCvww="/>
            </div>
            <div className={classes.description}>
                Description
            </div>
        </div>
    );
};

export default ProfileInfo;