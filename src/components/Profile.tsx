import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
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
            <div>
                Discription
            </div>
            <div>
                <div className={classes.item}>
                    My posts
                </div>
                <div className={classes.item}>
                    New posts
                </div>
                <div className={classes.item}>
                    Post1
                </div>
                <div className={classes.item}>
                    Post2
                </div>
            </div>
        </div>
    )
}

export default Profile;