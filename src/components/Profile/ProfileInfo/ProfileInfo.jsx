import React from 'react';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
    
    if (!profile) {
        return <Preloader />
    }
    
    return (
        <div>
            {/* <div>
                <img alt="photoone" src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            </div> */}
            <div>
                <img src={profile.photos.large} alt='ava'/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;