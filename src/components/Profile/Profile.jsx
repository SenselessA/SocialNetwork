import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/myPostsContainer';
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {

    if (!props.profile) return <Preloader />

    return (
        <div className="content">
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;