import React from "react";
import s from "../ProfileInfo.module.css";
import avatar_default from "../../../../assets/img/avatar_default.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPersonCircleCheck, faPersonCircleXmark} from "@fortawesome/free-solid-svg-icons";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

type ProfileAvatarPropsType = {
    photos?: { small: any; large: any },
    owner: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    followed?: boolean,
    onClick: () => void, status: string,
    updateStatus: (status: string) => void
}
export const ProfileAvatar: React.FC<ProfileAvatarPropsType> = (props) => {
    return <div className={s.avatarBlock}>
        <div className={s.profile_avatar}>
            <img src={props.photos?.large ? props.photos.large : avatar_default} alt={"avatar"}/>
            <div className={s.onlineStatus}>online</div>

            {props.owner && <input id="upload" type="file" accept="image/*" onChange={props.onChange}/>}

            {!props.owner &&
                <div className={props.followed ? s.followingStatus : `${s.followingStatus} ${s.unfollowingStatus}`}
                     onClick={props.onClick}>
                    {props.followed ? <FontAwesomeIcon icon={faPersonCircleCheck}/> :
                        <FontAwesomeIcon icon={faPersonCircleXmark}/>}
                    {props.followed ? "following" : "unfollowing"}
                </div>}

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.owner}/>
        </div>
    </div>;
}