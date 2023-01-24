import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileStatus.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'


type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}
const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksPropsType> = ({status, updateStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false)
    const [innerStatus, setInnerStatus] = useState(status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(innerStatus)

    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInnerStatus(e.currentTarget.value)
    }
    const onDoubleClickOnSpanHandler = () => {
        if (isOwner) {
            activateEditMode()
        } else return false
    }
    useEffect(() => {
        setInnerStatus(status)
    }, [status])


    return <h3>
        {!editMode && <div>
            <span className={s.status_span} onDoubleClick={onDoubleClickOnSpanHandler}>
                <FontAwesomeIcon icon={faComment} className={s.statusIcon}/>
                {status ? " " + status : " no status"}
            </span>
        </div>}
        {editMode && <div>
            <input className={s.status_input} onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                   placeholder={"status"} value={innerStatus}/>
        </div>}
    </h3>
}
export default ProfileStatusWithHooks;