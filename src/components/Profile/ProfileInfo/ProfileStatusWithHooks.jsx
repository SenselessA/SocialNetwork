import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    }

    return (
        <>
            { !editMode
                ?
                <div className={s.status}>
                    <b>Status: </b><span className={s.editStatus} onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                </div>
                :
                <div className={s.status}>
                    <input className={s.statusInput} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;