import React, { useState } from 'react';
import userPhoto from '../../../assets/images/userImage.png';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import '../../../App.css';
import cn from 'classnames'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => { setEditMode(false) })
    }

    return (
        <div className={s.profileWrapper}>
            <div className={s.photoSetting}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt='ava' />
                {isOwner &&
                    <div className={s.downloadPhoto}>
                        <input type="file" id='file' onChange={mainPhotoSelected} />
                        <label for='file' className={cn('btn', 'mainPhotoSelected')}>
                            Выбрать файл
                        </label>
                    </div>}
            </div>

            <div className={s.info}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
            </div>

        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner ? <div><button className='btn' onClick={goToEditMode}>Edit profile</button></div> : null}
        <div className={s.profileInfo}>
            <b>FullName</b> {profile.fullName}
        </div>
        <div className={s.profileInfo}>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div className={s.profileInfo}>
                <b>My professional skills</b> {profile.lookingForAJobDescription}
            </div>
        }
        <div className={s.profileInfo}>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div className={s.profileInfo}>
            <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}





const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;