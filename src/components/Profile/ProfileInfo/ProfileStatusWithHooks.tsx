import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileStatus.module.css"

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string)=> void
}
const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode = ()=> {
        setEditMode(true)
    }
    const deactivateEditMode = ()=> {
        setEditMode(false)
        props.updateStatus(status)

    }
    const onStatusChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])


        return <div>
            {!editMode && <div>
                <span className={s.status_span} onDoubleClick={activateEditMode}>{props.status || "no status :("}</span>
            </div>}
            {editMode  && <div>
                <input className={s.status_input} onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} placeholder={"status"} value={status}/>
            </div>}
        </div>
    }
export default ProfileStatusWithHooks;