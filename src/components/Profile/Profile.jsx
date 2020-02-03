import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/myPostsContainer';
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {

    if (!props.profile) return <Preloader />

    return (
        <div className="content">
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                saveProfile={props.saveProfile}
                updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;