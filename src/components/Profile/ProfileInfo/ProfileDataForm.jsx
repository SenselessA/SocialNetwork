import React from 'react'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import s from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form'
import style from '../../common/FormsControls/FormsControls.module.css'
import cn from 'classnames'
import '../../../App.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <div><button className='btn' >Save profile</button></div>
            {error
                ? <div className={style.formSummaryError}>
                    {error}
                </div>
                : null}
        </div>
        <div className={s.profileInfo}>
            <b>FullName:</b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div className={cn(s.profileInfo, s.jobChek)}>
            <b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>

            <div className={s.profileInfo}>
                <b>My professional skills:</b>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>

        <div className={s.profileInfo}>
            <b>About me:</b> 
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div className={s.profileInfo}>
            <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm